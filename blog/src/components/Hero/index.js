import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';

import style from './styles';

const Hero = props => {
  const { 
    backgroundImage,
    children,
    themeStyle = style, 
    customStyle = 'hero is-cover is-relative is-default is-bold'
  } = props;

  const fixedBgStyle = {
    backgroundImage: `url(${backgroundImage || 'https://source.unsplash.com/4flhKx1sUdE/1920x1080' })`,
    backgroundAttachment: 'fixed',
    backgroundPosition: '50% 0px'
  }

  console.log(fixedBgStyle);

  return (
    <div className={cx(themeStyle, customStyle)} style={fixedBgStyle}>
      {children}    
    </div>
  );
};

Hero.propTypes = {
  backgroundImage: PropTypes.string,
  children: PropTypes.node,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Hero;