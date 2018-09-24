import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';

import style from './styles';

const Heading = props => {
  const { title, children, themeStyle = style, customStyle = 'button button-signup btn-align btn-outlined light-btn' } = props;

  return (
    <Link to="/" className={cx(themeStyle, customStyle)} data-sumome-listbuilder-id='2ddd0fec-63c8-476b-a2ac-a338290a63e0'>
      Join The OM Tribe
    </Link>
  );
};

Heading.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Heading;
