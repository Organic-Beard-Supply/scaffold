import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';

import style from './styles';

const Section = props => {
  const { children, themeStyle = style, customStyle = '', customClass, size, backgroundImage } = props;

  const backgroundStyle = backgroundImage ? {
    backgroundImage: 'url(' + backgroundImage + ')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  } : {};

  return (
    <section className={cx(themeStyle, customStyle, customClass, size)} style={backgroundStyle}>
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
  customClass: PropTypes.string,
  size: PropTypes.string
};

export default Section;
