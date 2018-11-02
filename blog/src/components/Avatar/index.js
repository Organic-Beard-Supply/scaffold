import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { cx } from 'emotion';
import { find } from 'lodash';

import style from './styles';
import authors from '../../content/meta/authors';

const Avatar = props => {
  const { themeStyle = style, customStyle = 'mcard-controls', authorName, categories, prefix } = props;
  
  const author = find(authors, ['name', authorName]);
  const { avatar, name } = author;

  return (
    <div className={cx(themeStyle, customStyle)}>
      <div className={'mcard-avatar'}>
        <img src={avatar} alt={name} />
      </div>
      <div className={'mcard-info'}>
        <span>{name}</span>
        <div>
          {prefix && <span>Last updated on {prefix}</span>}
          {categories && (
            <span> <i className={'fa fa-circle'}></i> {categories.map(category => {
              return <Link to={`/categories/${category}`} key={category} className={'category is-' + category}>
                  {category}
                </Link>
              })}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

Avatar.propTypes = {
  authorName: PropTypes.string.isRequired,
  categories: PropTypes.array,
  prefix: PropTypes.string,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Avatar;
