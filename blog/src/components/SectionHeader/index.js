import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';

import style from './styles';

const SectionHeader = props => {
  const { title, children, themeStyle = style, customStyle } = props;

  return (
    <header className={cx(themeStyle, customStyle)}>
      {title ? <h1>{title}</h1> : children}
    </header>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default SectionHeader;