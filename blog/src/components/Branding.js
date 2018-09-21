import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { cx } from 'emotion';
import logo from "../../static/bulkit/images/logos/organic-man-logo-white.png"


import style from '../styles/branding';

const Branding = props => {
  const { themeStyle = style, customStyle = 'navbar-item', logoStyle = 'light-logo' } = props;

  return (
    <Link className={cx(themeStyle, customStyle)} to="/">
      <img src={logo} className={cx(logoStyle)} alt="Organic Man" />
    </Link>
  );
};

Branding.propTypes = {
  logo: PropTypes.node,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Branding;
