import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { cx } from 'emotion';

import logo from "../../../static/bulkit/images/logos/organic-man-landscape-dark.png"

import style from './styles';

const Footer = (props) => {
  const { themeStyle = style, customStyle = 'footer footer-light' } = props;

  return <StaticQuery
    query={graphql`
      query FooterQuery {
        defaultLinks: markdownRemark(
          fileAbsolutePath: { regex: "/content/parts/footer/links/default/" }
        ) {
          html
        },
        aboutLinks: markdownRemark(
          fileAbsolutePath: { regex: "/content/parts/footer/links/about/" }
        ) {
          html
        },
        contactLinks: markdownRemark(
          fileAbsolutePath: { regex: "/content/parts/footer/links/contact/" }
        ) {
          html
        },
        description: markdownRemark(
          fileAbsolutePath: { regex: "../content/parts/footer/description/" }
        ) { 
          html
        },
        copyright: markdownRemark(
          fileAbsolutePath: { regex: "/content/parts/copyright/" }
        ) {
          html
        }
      }
    `}
    render={(data) => {
      
      const { 
        defaultLinks: { html: defaultLinksHTML },
        aboutLinks: { html: aboutLinksHTML },
        contactLinks: { html: contactLinksHTML },
        description: { html: descriptionHTML },
        copyright: { html: copyrightHTML }
      } = data;

      return (
        <footer className={cx(themeStyle, customStyle)}>
          <div className={'container'}>
            <div className={'columns footer-columns is-flex-mobile'}>
              <div className={'column is-half-mobile'}>
                <div className={'footer-column'}>
                  <div dangerouslySetInnerHTML={{ __html: defaultLinksHTML }}></div>
                </div>
              </div>
              <div className={'column is-half-mobile'}>
                <div className={'footer-column'}>
                  <div dangerouslySetInnerHTML={{ __html: aboutLinksHTML }}></div>
                </div>
              </div>
              <div className={'column is-half-mobile'}>
                <div className={'footer-column'}>
                  <div dangerouslySetInnerHTML={{ __html: contactLinksHTML }}></div>
                </div>
              </div>
              <div className={'column is-full-mobile'}>
                <hr className={'is-block-mobile is-hidden-tablet is-hidden-desktop'} />
                <div className={'footer-column'}>
                  <div className={'footer-logo'}>
                      <a href="/">
                        <img className={'dark-logo'} src={logo} alt="Organic Man" />
                      </a>
                  </div>
                  <div className={'footer-description pt-10 pb-10'} dangerouslySetInnerHTML={{ __html: descriptionHTML }}></div>
                  <div className={'copyright'} dangerouslySetInnerHTML={{ __html: copyrightHTML }}></div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      );
    }}
  />
};

Footer.propTypes = {
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Footer;