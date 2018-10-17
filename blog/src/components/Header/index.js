import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';

import style from './styles';

const Header = props => {
  const { 
    children, 
    themeStyle = style,
    light,
    dark,
    fade,
    stuck
  } = props;

  const commonStyle = 'navbar navbar-wrapper is-transparent',
        lightStyle = light ? ' navbar-light' : '',
        defaultStyle = dark ? ' navbar-default' : '',
        fadeStyle = fade ? ' navbar-fade' : '',
        staticStyle = stuck ? ' is-static' : '';

  const customStyle = commonStyle + lightStyle + defaultStyle + fadeStyle + staticStyle;
  
  return (
    <header className={cx(themeStyle, customStyle)}>
      <div className={'container'}>
        {children}
      </div>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fade: PropTypes.bool,
  stuck: PropTypes.bool,
};

export default Header;
