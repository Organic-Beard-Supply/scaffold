import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';

import style from './styles';

import config from '../../content/meta/config';

const Button = props => {
  const { clickTrigger, text, themeStyle = style, customStyle = '', customClass } = props;

  if (clickTrigger) {
    let clickTriggerId;
    let clickTriggerCTA;

    if (clickTrigger === 'join') {
      clickTriggerId = config.joinTribeId;
      clickTriggerCTA = config.joinTribeCTA;
    }
    
    return (
      <a
        className={cx(themeStyle, customStyle, customClass)} 
        data-sumome-listbuilder-id={clickTriggerId}
        >
        {clickTriggerCTA}
      </a>
    );
  } 
  
  return (
    <Link to="/" className={cx(themeStyle, customStyle, customClass)}>
      {text}
    </Link>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  clickTrigger: PropTypes.string,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Button;
