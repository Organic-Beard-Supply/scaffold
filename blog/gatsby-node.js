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
    const postTemplate = path.resolve('./src/templates/PostTemplate.js');
    const pageTemplate = path.resolve('./src/templates/PageTemplate.js');
    const categoryTemplate = path.resolve('./src/templates/CategoryTemplate.js');
    const tagTemplate = path.resolve('./src/templates/TagTemplate.js');

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
                fields {
                  slug
                  prefix
                  source
                }
                frontmatter {
                  title
                  subTitle
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

        console.log('items: ', items);

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
            path: `/${process.env.CATEGORY_PATH}/${kebabCase(category)}/`,
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
          
          //add more intelligence to this. i.e. same category, tag, etc.
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
        pages.forEach(({ node }) => {
          const slug = node.fields.slug;
          const source = node.fields.source;

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
