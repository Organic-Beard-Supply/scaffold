import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import { cx } from 'emotion';

import Button from 'components/Button';

import style from './styles';
import sumo from '../../content/meta/config';

const Menu = props => {
  const { items, themeStyle = style, customStyle = 'navbar-menu', buttonStyle } = props;

  return (
    <nav className={cx(themeStyle, customStyle)}>
      <div className={'navbar-start'}>
          {items.map((item, index) => {
            const { label, to, linkProps, subMenu } = item;
            
            if (subMenu) {
              return (
                <div key={index} className={'navbar-item has-dropdown is-hoverable is-hidden-mobile'}>
                  <Link className={'navbar-link'} to={to} activeClassName="active" {...linkProps}>
                    {label}
                  </Link>
                  
                  <div className={'navbar-dropdown is-boxed is-medium'}>
                    {subMenu.map((subItem, index) => {
                      const { label, to, linkProps } = subItem;

                      return (                        
                        <Link key={index} className={'navbar-item is-menu'} to={to} {...linkProps}>
                          <span>{label}</span>
                        </Link>
                      );
                    })}
                  </div>
                  
                </div>
              );
            } else {
              return (
                // <a class="navbar-item is-slide" href="/docs">
                //     Docs
                // </a>
                <Link to={to} activeClassName="active" {...linkProps} className={'navbar-item is-slide'}>
                  {label}
                </Link>
              );
            }
          })}
      </div>
      <div className={'navbar-end'}>
        <div className={'navbar-item'}>
          <Button clickTrigger={'join'} customClass={cx('button button-signup btn-align', buttonStyle)} />
        </div>
      </div>
    </nav>
  );
};

Menu.propTypes = {
  items: PropTypes.array.isRequired,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Menu;
