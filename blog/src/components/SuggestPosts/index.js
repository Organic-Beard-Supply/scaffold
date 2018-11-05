import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';

import Section from 'components/Section';
import PostPreview from 'components/PostPreview'

import style from './styles';

const SuggestedPosts = props => {
  const { 
    themeStyle = style, 
    customStyle = '',
    suggested
  } = props;

  return (
    <div className={cx(themeStyle, customStyle)}>
      <Section size={'is-small'} customStyle={'huge-pb'}>
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section-title-wrapper">
                <h2 className="title dark-text text-bold main-title is-2 is-title-reveal has-text-centered">
                    You may also like
                </h2>
              </div>
              <div className="columns">
                {suggested.map(({ node }, index) => { 
                  return <PostPreview key={index} post={node} />
                })}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

SuggestedPosts.propTypes = {
  suggested: PropTypes.array.isRequired,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default SuggestedPosts;
