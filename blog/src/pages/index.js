import React from 'react';
import { graphql } from 'gatsby';

import Branding from 'components/Branding';
import FeaturedPost from 'components/FeaturedPost';
import Footer from 'components/Footer';
import Heading from 'components/Heading';
import Hero from 'components/Hero';
import Header from 'components/Header';
import Blog from 'components/Blog';
import Layout from 'components/Layout';
import Menu from 'components/Menu';
import Pagination from 'components/Pagination';
import Section from 'components/Section';
import Seo from 'components/Seo';
import StickyNav from 'components/StickyNav';
import Subscribe from 'components/Subscribe';

import config from 'content/meta/config';
import menuItems from 'content/meta/menu';
import categoryItems from 'content/meta/categories';

import logo from '../../static/bulkit/images/logos/organic-man-logo-white.png';

import '../../static/bulkit/css/bulma.css';
import '../../static/bulkit/css/om.css';
import '../../static/bulkit/css/icons.min.css';

const BlogPage = props => {
  const {
    data: {
      posts: { edges },
    },
  } = props;

  const posts = edges.map(edge => edge.node);

  const {
    headerTitle,
    headerSubTitle,
    siteUrl,
    siteTitle,
    siteDescription,
    siteLanguage,
  } = config;

  return (
    <Layout>
      <Hero>
        <Header light stuck dark>
          <Branding title={headerTitle} subTitle={headerSubTitle} logo={logo} />
          <Menu items={menuItems} buttonStyle={'btn-outlined light-btn'} />
        </Header>
        <FeaturedPost item={posts[0]} />
      </Hero>
      <StickyNav items={categoryItems} />
      <Section size={'is-medium'} customClass={'blog-section'}>
        <div className={'container'}>
          <div className={'columns is-centered'}>
            <div className={'column is-11'}>
              <div className={'section-title-wrapper no-padding-top has-text-centered'}>
                <Heading title="Featured Articles" customStyle={'title dark-text text-bold main-title is-2 no-padding-top'} />
              </div>
              <Blog items={posts}/>
              <Pagination />
            </div>
          </div>
        </div>
      </Section>
      <Subscribe type={'blog'} />
      <Subscribe type={'tribe'} />
      <Footer></Footer>
      <Seo
        url={siteUrl}
        language={siteLanguage}
        title={siteTitle}
        description={siteDescription}
      />
    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
  query {
    posts: allMarkdownRemark(
      filter: { fields: { source: { eq: "posts" }, slug: { ne: null } } }
      sort: { fields: [fields___prefix], order: DESC }
    ) {
      edges {
        node {
          excerpt(pruneLength: 150)
          fields {
            slug
            prefix
            source
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
