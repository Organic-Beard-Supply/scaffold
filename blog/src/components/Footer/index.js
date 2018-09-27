import PropTypes from 'prop-types';
import React from 'react';
import { cx } from 'emotion';

import logo from "../../../static/bulkit/images/logos/organic-man-landscape-dark.png"

import style from './styles';

const Footer = props => {
  const { links, copyright, themeStyle = style, customStyle = 'footer footer-light' } = props;

  return (
    <footer className={cx(themeStyle, customStyle)}>
      <div className={'container'}>
        <div className={'columns footer-columns is-flex-mobile'}>
          <div className={'column is-half-mobile'}>
            <div className={'footer-column'}>
              <div className={'footer-header'}>
                <h3>Organic Man</h3>
              </div>
              <ul class="link-list">
                {/* <li>{{> click-trigger class="secondary-text"}}</li> */}
                <li><a href="#" class="secondary-text">Join the OM Tribe</a></li>
                <li><a href="/pre-order.html#hero" class="accent-text">Pre-order your box</a></li>
                <li><a href="/#mission">Our Mission</a></li>
                <li><a href="/#paths">Personalized paths</a></li>
                <li><a href="/#journeys">Guided journeys</a></li>
                <li><a href="/#communities">Supportive tribe</a></li>
                <li><a href="/#gatherings">Powerful gatherings</a></li>
              </ul>
            </div>
          </div>
          <div className={'column is-half-mobile'}>
            <div className={'footer-column'}>
              <div className={'footer-header'}>
                <h3>About OM</h3>
              </div>
              <ul class="link-list">
                <li><a href="/#how-it-works">How It Works</a></li>
                <li><a href="/#stories">Stories</a></li>
                <li><a href="javascript:void(0)" data-title="Coming soon!" data-toggle="tooltip" data-trigger="hover" data-placement="top">Blog</a></li>
                <li><a href="/#faq">FAQs</a></li>
                <li><a href="javascript:void(0)" class="modal-trigger" data-modal="basic-large-modal-terms">Terms</a></li>
                <li><a href="javascript:void(0)" class="modal-trigger" data-modal="basic-large-modal-privacy">Privacy policy</a></li>
                <li><a href="javascript:void(0)" data-title="Coming soon!" data-toggle="tooltip" data-trigger="hover" data-placement="top">Self discovery profile</a></li>
              </ul>
            </div>
          </div>
          <div className={'column is-half-mobile'}>
            <div className={'footer-column'}>
              <div className={'footer-header'}>
                <h3>Contact Us</h3>
              </div>
              <ul class="link-list">
                <li><a href="mailto:hello@organicman.eco">hello@organicman.eco</a></li>
                <li><a href="javascript:void(0)" class="is-kayako-click-trigger">Send us a message</a></li>
                <li><a href="https://www.instagram.com/organicman.eco/" target="_blank">Instagram</a></li>
                <li><a href="https://www.facebook.com/OrganicMan.eco/" target="_blank">Facebook</a></li>
                {/* <li><a href="//#">Twitter</a></li> */}
              </ul>
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
              <div className={'footer-description pt-10 pb-10'}>
                  Organic Man empowers transformative changes to occur within ourselves and our global community to build a world of "we" through wisdom, service, community-action, friendship, sharing, connection, and vulnerability. We are actively making a better world through our own self work. Together.
              </div>
              <div className={'copyright'}>
                  <span className={'moto dark-text'}>Actualized with <i className={'fa fa-heart color-red'}></i>  by Organic Man.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  links: PropTypes.string,
  copyright: PropTypes.string,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Footer;
