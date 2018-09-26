import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { cx } from 'emotion';
//import Waypoint from 'react-waypoint'; // consider @react-sticky https://github.com/captivationsoftware/react-sticky

import style from './styles';

// const onWaypointEnter = () => {
//   console.log('unstick: ');
//   //unstick, remove class 'stuck'
// };

// const onWaypointLeave = () => {
//   console.log('stick: ');
//   //stick, add class 'stuck'
// };

const StickyNav = props => {
  const { items, themeStyle = style, customStyle = 'scroll-nav-wrapper' } = props;

  return (
    // <Waypoint onEnter={onWaypointEnter} onLeave={onWaypointLeave}>
      <div className={cx(themeStyle, customStyle)}>
        <div className="container">
          <div className="tabs scrollnav-tabs is-centered">
            <ul>
              {items.map(item => {
                const { label, colorClass, slug } = item;
              
                return (
                  <li className={'scrollnav-item'} key={slug}>
                    <Link to={slug} className={'category is-slide ' + colorClass} activeClassName="active">
                      {label}
                    </Link>
                  </li>
                );
              })}
              {/* 
                <li>
                  //TODO: Add 'search' trigger
                  // - https://www.gatsbyjs.org/docs/adding-search/
                </li>
              */}
            </ul>
          </div>
        </div>
      </div>
    // </Waypoint>
  );
};

StickyNav.propTypes = {
  items: PropTypes.array.isRequired,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
  onEnter: PropTypes.func,
  onLeave: PropTypes.func
};

export default StickyNav;
