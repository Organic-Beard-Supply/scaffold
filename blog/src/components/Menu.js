import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import { cx } from 'emotion';

import style from '../styles/menu';

const Menu = props => {
  const { items, themeStyle = style, customStyle = 'navbar-menu' } = props;

  return (
    <nav className={cx(themeStyle, customStyle)}>
      <div className={'navbar-start'}>
        <div className={'navbar-item has-dropdown is-hoverable is-hidden-mobile'}>
          {items.map((item, index) => {
            const { label, to, icon: Icon, linkProps } = item;
            
            return (
              <Link key={index} to={to} activeClassName="active" {...linkProps} className={'navbar-link'}>
                {Icon && <Icon />}
                <span>{label}</span>
              </Link>
            );
          })}
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
