import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';

import style from './styles';

const Header = props => {
  const { children, themeStyle = style, customStyle = 'navbar navbar-wrapper navbar-light is-transparent is-static' } = props;

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
};

export default Header;
