import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';

import style from './styles';

const Button = props => {
  const { themeStyle = style, customStyle = '', customClass } = props;

  return (
    <Link to="/" className={cx(themeStyle, customStyle, customClass)} data-sumome-listbuilder-id='2ddd0fec-63c8-476b-a2ac-a338290a63e0'>
      Join The OM Tribe
    </Link>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Button;
