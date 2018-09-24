import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { cx } from 'emotion';
import logo from "../../../static/bulkit/images/logos/organic-man-logo-white.png"

import style from './styles';

const Branding = props => {
  const { themeStyle = style, customStyle = 'navbar-item', logoStyle = 'light-logo' } = props;

  return (
    <div className={'navbar-brand'}>
      <Link className={cx(themeStyle, customStyle)} to="/">
        <img src={logo} className={cx(logoStyle)} alt="Organic Man" />
      </Link>
      <div className="custom-burger" data-target="">
        <Link id="" className={'responsive-btn'} to="javascript:void(0);">
            <span className={'menu-toggle'}>	
              <span className={'icon-box-toggle'}>
                <span className={'rotate'}>
                  <i className={'icon-line-top'}></i>
                  <i className={'icon-line-center'}></i>
                  <i className={'icon-line-bottom'}></i> 
                </span>
              </span>
            </span>
          </Link>
        </div>
    </div>
  );
};

Branding.propTypes = {
  logo: PropTypes.node,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Branding;
