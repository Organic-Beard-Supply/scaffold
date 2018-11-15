const { kebabCase, drop } = require('lodash');
const path = require('path');
const Promise = require('bluebird');
const dotenv = require('dotenv');

const { createFilePath } = require(`gatsby-source-filesystem`);

const SLUG_SEPARATOR = '___';

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
})

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent);
    const filePath = createFilePath({ node, getNode });

    const source = fileNode.sourceInstanceName;

    const separatorExists = ~filePath.indexOf(SLUG_SEPARATOR);

    let slug;
    let prefix;

    if (separatorExists) {
      const separatorPosition = filePath.indexOf(SLUG_SEPARATOR);
      const slugBeginning = separatorPosition + SLUG_SEPARATOR.length;
      slug =
        separatorPosition === 1
          ? null
          : `/${filePath.substring(slugBeginning)}`;
      prefix = filePath.substring(1, separatorPosition);
    } else {
      slug = filePath;
      prefix = '';
    }

    if (source !== 'parts') {
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      });
    }
    createNodeField({
      node,
      name: `prefix`,
      value: prefix,
    });
    createNodeField({
      node,
      name: `source`,
      value: source,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const pageTemplate = path.resolve('./src/templates/PageTemplate.js');
    const postTemplate = path.resolve('./src/templates/PostTemplate.js');
    const categoryTemplate = path.resolve('./src/templates/CategoryTemplate.js');
    const tagTemplate = path.resolve('./src/templates/TagTemplate.js');

    //Pair this down to only pass information that's needed, then query in component
    //via https://github.com/gatsbyjs/gatsby/issues/8156#issuecomment-421641619

    resolve(
      graphql(`
        {
          allMarkdownRemark(
            filter: { fields: { slug: { ne: null } } }
            sort: { fields: [fields___prefix], order: DESC }
            limit: 1000
          ) {
            edges {
              node {
                fileAbsolutePath
                excerpt(pruneLength: 150)
                fields {
                  slug
                  prefix
                  source
                }
                frontmatter {
                  title
                  subTitle
                  authorName
                  categories
                  tags
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const items = result.data.allMarkdownRemark.edges;

        // console.log('items: ', items);

        const categorySet = new Set();
        const tagSet = new Set();

        // Create category list
        items.map((edge) => {
          const {
            node: {
              frontmatter: { categories, tags },
            },
          } = edge;

          if (categories) {
            categories.map((category) => {
              return categorySet.add(category);
            });
          }

          if (tags) {
            tags.map((tag) => {
              return tagSet.add(tag);
            })
          }
        });

        // Create category pages
        const categoryList = Array.from(categorySet);
        categoryList.map(category => {
          createPage({
            path: `${process.env.CATEGORY_PATH}/${kebabCase(category)}/`,
            component: categoryTemplate,
            context: {
              category,
            }
          });
        });

        // Create tag pages
        const tagList = Array.from(tagSet);
        tagList.map((tag) => {
          createPage({
            path: `/${process.env.TAG_PATH}/${kebabCase(tag)}/`,
            component: tagTemplate,
            context: {
              tag
            }
          });
        })

        // Create posts
        const posts = items.filter(item => item.node.fields.source === 'posts');
        posts.map(({ node }) => {
          const slug = node.fields.slug;
          
          //update with a random selection, not just the first 3 posts
          //then, add more intelligence like same categories, tags, etc.
          //...also, look into how to include cover photo either here or in component
          const filtered = posts.filter(({node}) => node.fields.slug !== slug);
          const suggested = drop(filtered, filtered.length - 3);

          createPage({
            path: slug,
            component: postTemplate,
            context: {
              slug,
              suggested
            },
          });
        });

        // create pages
        const pages = items.filter(item => item.node.fields.source === 'pages');
        pages.map((page) => {
          const {
            node: {
              fields: { slug, source }
            } 
          } = page;

          createPage({
            path: slug,
            component: pageTemplate,
            context: {
              slug,
              source,
            },
          });
        });

      })
    );
  });
};
