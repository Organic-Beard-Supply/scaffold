import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';

import Button from 'components/Button';
import Heading from 'components/Heading';
import Section from 'components/Section';

import style from './styles';

import bgImage from './paisley-pattern.png';

const Subscribe = props => {
  const { type, themeStyle = style, customStyle = '' } = props;

  if (type === 'blog') {
    return (
      <div className={cx(themeStyle, customStyle)}>
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
      </div>
    );
  } else if (type === 'tribe') {
    return (
      <div className={cx(themeStyle, customStyle)}>
        <Section size={'is-small'} customClass={'section-primary has-text-centered'} backgroundImage={bgImage}>
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
      </div>
    )
  }
  return '';
};

Subscribe.propTypes = {
  type: PropTypes.string.isRequired,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Subscribe;
