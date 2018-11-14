import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import 'prismjs/themes/prism-okaidia.css';
import '../styles/variables';
import '../styles/global';

import Article from 'components/Article';
import Author from 'components/Author';
import Avatar from 'components/Avatar';
import Branding from 'components/Branding';
import Bodytext from 'components/Bodytext';
import Comments from 'components/Comments';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Heading from 'components/Heading';
import Image from 'components/Image';
import Layout from 'components/Layout';
import Menu from 'components/Menu';
import Section from 'components/Section';
import Seo from 'components/Seo';
import Subscribe from 'components/Subscribe'
import SuggestedPosts from 'components/SuggestPosts'

import config from 'content/meta/config';
import menuItems from 'content/meta/menu';

import logo from '../../static/bulkit/images/logos/organic-man-landscape-dark.png';

const PostTemplate = props => {
  const {
    data: {
      post: {
        excerpt,
        html: postHTML,
        frontmatter: { title, categories, tags, authorName, cover },
        fields: { slug, prefix },
      }
    },
    pageContext: { suggested },
  } = props;

  const {
    childImageSharp: {
      fluid: { src }
    }
  } = cover;

  const {
    headerTitle,
    headerSubTitle,
    siteUrl,
    siteTitle,
    siteLanguage,
    siteTitlePostfix,
  } = config;

  return (
    <Layout>
      <Header dark stuck >
        <Branding title={headerTitle} subTitle={headerSubTitle} logo={logo} />
        <Menu items={menuItems} buttonStyle={'secondary-btn'} />
      </Header>
      <Article>
        <div id="hero" className="hero is-relative">
          <div className="hero-body pt-60 pb-10">
            <div className="container">
              <div className="columns is-centered is-vcentered">
                <div className="column is-8">
                  <h2 className="subtitle is-5 pb-20 has-text-centered is-spaced">
                    {categories && <Link to={`${config.categoryPath}/${categories[0]}`} className={`category is-${categories[0]}`}>{categories[0]}</Link> }
                    <a className="category is-expression" href="/category.html"></a>
                  </h2>
                  <Heading>
                    <h1 className="title is-landing is-1 has-text-centered">{title}</h1>
                  </Heading>
                  <Avatar authorName={authorName} prefix={prefix} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image src={src} slant />
        <Section customClass={'blog-section'}>
          <div className="container">
            <div className="columns is-centered">
              <div className={'column is-9'}>
                <Bodytext html={postHTML} />
                <Comments slug={slug} siteUrl={siteUrl} />
              </div>
            </div>
          </div>
        </Section>
        <Author authorName={authorName} prefix={prefix} categories={categories} tags={tags} />
        {suggested && <SuggestedPosts suggested={suggested} />}
      </Article>
      <Subscribe type={'blog'} />
      <Subscribe type={'tribe'} />
      <Footer></Footer>
      <Seo
        url={`${siteUrl}${slug}`}
        language={siteLanguage}
        title={`${title}${siteTitlePostfix}`}
        description={excerpt}
      />
    </Layout>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
  suggested: PropTypes.object
};

export default PostTemplate;

export const query = graphql`
  query PostTemplateQuery($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fileAbsolutePath
      excerpt
      fields {
        slug
        prefix
      }
      frontmatter {
        title
        categories
        tags
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
`;
