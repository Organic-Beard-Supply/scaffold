import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { cx } from 'emotion';

import style from './styles';

const Branding = props => {
  const { themeStyle = style, customStyle = 'navbar-brand', logo } = props;

  return (
    <div className={cx(themeStyle, customStyle)}>
      <Link className={'navbar-item'} to="/">
        <img src={logo} alt="Organic Man" />
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
  logo: PropTypes.node.isRequired,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Branding;
