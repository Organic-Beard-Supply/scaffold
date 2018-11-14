import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import TagIcon from 'react-feather/dist/icons/tag';

import 'prismjs/themes/prism-okaidia.css';
import '../styles/variables';
import '../styles/global';

import Article from '@react-website-themes/default/components/Article';
import Blog from 'components/Blog';
import Branding from 'components/Branding';
import FeaturedPost from 'components/FeaturedPost';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Heading from 'components/Heading';
import Hero from 'components/Hero';
import Layout from 'components/Layout';
import List from '@react-website-themes/default/components/List';
import Menu from 'components/Menu';
import Pagination from 'components/Pagination';
import Section from 'components/Section';
import Seo from 'components/Seo';
import Subscribe from 'components/Subscribe'

import config from 'content/meta/config';
import menuItems from 'content/meta/menu';

import logo from '../../static/bulkit/images/logos/organic-man-logo-white.png';

const PageTemplate = props => {
  const {
    pageContext: { tag },
    data: {
      posts: { totalCount, edges }
    },
  } = props;

  const items = edges.map(edge => edge.node);

  const {
    headerTitle,
    headerSubTitle,
    siteUrl,
    siteDescription,
    siteLanguage,
    siteTitlePostfix,
  } = config;

  return (
    <Layout>
      <Hero>
        <Header light stuck dark>
          <Branding title={headerTitle} subTitle={headerSubTitle} logo={logo} />
          <Menu items={menuItems} buttonStyle={'btn-outlined light-btn'} />
        </Header>
        {/* Update FeaturedPost with "Featured in [tag]" instead of default "Featured Article" */}
        <FeaturedPost item={items[0]} />
      </Hero>
      <Section size={'is-medium'} customClass={'blog-section'}>
        <div className={'container'}>
          <div className={'columns is-centered'}>
            <div className={'column is-11'}>
              <div className={'section-title-wrapper no-padding-top has-text-centered'}>
                <Heading title={`Posts in "${tag}"`} customStyle={'title dark-text text-bold main-title is-2 no-padding-top'} />
              </div>
              <Blog items={items}/>
              <Pagination />
            </div>
          </div>
        </div>
      </Section>
      <Article>
        <Heading>
          <span>Posts in tag</span> <TagIcon />
          <h1>{tag}</h1>
          <p className="meta">
            There {totalCount > 1 ? 'are' : 'is'} <strong>{totalCount}</strong>{' '}
            post
            {totalCount > 1 ? 's' : ''} in the tag.
          </p>
        </Heading>
        <List items={items} />
      </Article>
      <Subscribe type={'blog'} />
      <Subscribe type={'tribe'} />
      <Footer></Footer>
      <Seo
        url={`${siteUrl}/${config.tagPath}/${tag}/`}
        language={siteLanguage}
        title={`Posts in tag: ${tag}${siteTitlePostfix}`}
        description={siteDescription}
      />
    </Layout>
  );
};

PageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export default PageTemplate;

export const query = graphql`
  query TagTemplateQuery($tag: String!) {
    posts: allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___prefix], order: DESC }
      filter: { frontmatter: { tags: { eq: $tag } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 150)
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            subTitle
            categories
            authorName
            cover {
              childImageSharp {
                fluid(maxWidth: 525) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
