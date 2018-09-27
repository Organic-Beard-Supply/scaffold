import React from 'react';
import { graphql } from 'gatsby';

import CalendarIcon from 'react-feather/dist/icons/calendar';
import UserIcon from 'react-feather/dist/icons/user';
import TagIcon from 'react-feather/dist/icons/tag';

import Branding from 'components/Branding';
import Button from 'components/Button';
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

import config from 'content/meta/config';
import menuItems from 'content/meta/menu';
import categoryItems from 'content/meta/categories';

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
      <Hero>
        <Header>
          <Branding title={headerTitle} subTitle={headerSubTitle} />
          <Menu items={menuItems} />
        </Header>
      </Hero>
      <StickyNav items={categoryItems} />
      <Section size={'is-medium'} customClass={'blog-section'}>
        <div className={'container'}>
          <div className={'columns is-centered'}>
            <div className={'column is-11'}>
              <div className={'section-title-wrapper no-padding-top has-text-centered'}>
                <Heading title="Featured Articles" customStyle={'title dark-text text-bold main-title is-2 no-padding-top'} />
              </div>
              <Blog items={posts} cover={'https://source.unsplash.com/1200x300/?meditate'} author={{name: 'Joel Serino', img: 'https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/37120066_10155609598123093_8439467181653098496_n.jpg?_nc_cat=0&oh=adb58392f3e9747460eaa6108146d5db&oe=5C01677B'}}/>
              <Pagination />
            </div>
          </div>
        </div>
      </Section>
      <Section size={'is-small'} customClass={'section-feature-grey has-text-centered'}>
        <div className={'section-title-wrapper'}>
          <Heading title="Get more stories like these" customStyle={'title dark-text text-bold main-title is-2'} />
          <h3 className={'subtitle dark-text is-4'}>
            Join our mailing list to have guidance, positive affirmation, and self care tips delivered directly to your inbox.
          </h3>
          <div className={'columns is-centered'}>
            <div className={'column is-6'}>
              <div className={'field has-addons'}>
                <div className={'control is-expanded'}>
                  <input className={'input is-large'} type="text" placeholder="Email Address" />
                </div>
                <div className={'control'}>
                  <a className={'button accent-btn is-large'}>
                    Submit
                  </a>
                </div>
              </div>
            </div>
          </div>
          <p className={'pt-10 light-grey-text'}>
            <small><em>We respect you and your privacy - we will never share your information.</em></small>
          </p>
        </div>
      </Section>
      <Section size={'is-small'} customClass={'section-primary has-text-centered'}>
        <div className={'columns is-centered'}>
          <div className={'column is-8'}>
            <div className={'section-title-wrapper no-padding'}>
              <Heading title="Discover. Connect. Serve." customStyle={'title light-text text-bold main-title is-1 no-padding-top'} />
            </div>
            <h3 className={'subtitle light-text'}>
            A tribe of like minded men empowering each other by sharing valuable insight, ideas, challenges, stories, and vulnerabilities.
            </h3>
            <p>
              <Button customClass={'button button-cta secondary-btn is-large raised'}></Button>
            </p>
          </div>
        </div>
      </Section>
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
          excerpt(pruneLength: 250)
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            categories
            subTitle
          }
        }
      }
    }
  }
`;
