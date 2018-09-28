import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';

import style from './styles';

const Hero = props => {
  const { 
    children, 
    themeStyle = style, 
    customStyle = 'hero is-cover is-relative is-default is-bold'
  } = props;

  return (
    <div className={cx(themeStyle, customStyle)} style={{backgroundImage: 'url(https://source.unsplash.com/4flhKx1sUdE/1920x1080)', backgroundAttachment: 'fixed', backgroundPosition: '50% 0px' }}>
      {children}    
    </div>
  );
};

Hero.propTypes = {
  children: PropTypes.node,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Hero;