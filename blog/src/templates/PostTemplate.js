import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import 'prismjs/themes/prism-okaidia.css';
import '../styles/variables';
import '../styles/global';

import Article from 'components/Article';
import Author from '@react-website-themes/default/components/Author';
import Avatar from 'components/Avatar';
import Branding from 'components/Branding';
import Bodytext from '@react-website-themes/default/components/Bodytext';
// import Comments from 'components/Comments';
import Header from 'components/Header';
import Heading from '@react-website-themes/default/components/Heading';
import Image from 'components/Image';
import Layout from 'components/Layout';
import Menu from 'components/Menu';
import NextPrev from '@react-website-themes/default/components/NextPrev';
import Section from 'components/Section';
import Seo from '@react-website-themes/default/components/Seo';

import config from 'content/meta/config';
import menuItems from 'content/meta/menu';

import CalendarIcon from 'react-feather/dist/icons/calendar';
import UserIcon from 'react-feather/dist/icons/user';
import TagIcon from 'react-feather/dist/icons/tag';
import PrevIcon from 'react-feather/dist/icons/arrow-left';
import NextIcon from 'react-feather/dist/icons/arrow-right';

import logo from '../../static/bulkit/images/logos/organic-man-landscape-dark.png';

const metaIcons = {
  calendar: CalendarIcon,
  user: UserIcon,
  tag: TagIcon,
};

const nextPrevIcons = {
  next: NextIcon,
  prev: PrevIcon,
};

const PostTemplate = props => {
  const {
    data: {
      post: {
        excerpt,
        html: postHTML,
        frontmatter: { title, categories, authorName, cover },
        fields: { slug, prefix },
      },
      author: { html: authorHTML }
    },
    pageContext: { next, prev },
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
                    {categories && <Link to={`/${categories[0]}`} className={`category is-${categories[0]}`}>{categories[0]}</Link> }
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
              <div className={'column is-10'}>
                <div className="flex-card is-full-post no-padding-top no-padding-bottom">
                  <Bodytext html={postHTML} />
                </div>
              </div>
            </div>
          </div>
        </Section>

        <NextPrev next={next} prev={prev} icons={nextPrevIcons} />
        <Author html={authorHTML} />
      </Article>
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
  next: PropTypes.object,
  prev: PropTypes.object,
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
    author: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/author/" }
    ) {
      html
    }
    copyright: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/copyright/" }
    ) {
      html
    }
  }
`;
