import React from 'react';
import PropTypes from 'prop-types';
import FacebookProvider, { Comments as FBComments } from 'react-facebook';
import { cx } from 'emotion';

import config from '../../content/meta/config';

import style from './styles';

const Comments = props => {
  const { slug, siteUrl, themeStyle = style, customStyle = '' } = props;

  return (
    <div className={cx(themeStyle, customStyle)}>
      <FacebookProvider appId={config.fbAppId}>
        <FBComments
          href={`${siteUrl}${slug}`}
          data-width="100%"
          width="100%"
          colorScheme="light"
        />
      </FacebookProvider>
    </div>
  );
};

Comments.propTypes = {
  slug: PropTypes.string.isRequired,
  siteUrl: PropTypes.string.isRequired,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Comments;
