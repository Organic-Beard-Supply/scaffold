import React from 'react';
import { graphql } from 'gatsby';

import CalendarIcon from 'react-feather/dist/icons/calendar';
import UserIcon from 'react-feather/dist/icons/user';
import TagIcon from 'react-feather/dist/icons/tag';

import Article from 'components/Article';
import Branding from 'components/Branding';
import Header from 'components/Header';
import Blog from 'components/Blog';
import Layout from 'components/Layout';
import Menu from 'components/Menu';
import Seo from 'components/Seo';

import config from 'content/meta/config';
import menuItems from 'content/meta/menu';

import '../../static/bulkit/css/bulma.css';
import '../../static/bulkit/css/om.css';
import '../../static/bulkit/css/icons.min.css';

// import '../../static/bulkit/js/app.js';
// import '../../static/bulkit/js/core.js';
// import '../../static/bulkit/js/core.js';
// import '../../static/bulkit/js/custom.js';
// import '../../static/bulkit/js/components/modals.js';
// import '../../static/bulkit/js/components/search.js';

const metaIcons = {
  calendar: CalendarIcon,
  user: UserIcon,
  tag: TagIcon,
};

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
      <Header>
        <Branding title={headerTitle} subTitle={headerSubTitle} />
        <Menu items={menuItems} />
      </Header>
      <Article>
        <Blog items={posts} author={'greg'} metaIcons={metaIcons} />
      </Article>
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
          excerpt(pruneLength: 250)
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            categories
          }
        }
      }
    }
  }
`;
