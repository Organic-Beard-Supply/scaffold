import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import { Link } from 'gatsby';
import { replace } from 'lodash';

import config from '../../content/meta/config';

import Avatar from '../Avatar';
import Section from '../Section';

import style from './styles';

const Author = props => {
  const { authorName, prefix, categories, tags, themeStyle = style, customStyle = '' } = props;

  return (
    <div className={cx(themeStyle, customStyle)}>
      <Section size={'is-small'} customClass={'section-feature-grey-accent'}>
        <div className="columns is-centered">
          <div className="column is-3">
            <Avatar authorName={authorName} prefix={prefix} />
          </div>
          <div className="column is-6">
            {categories && <p><strong>Category:</strong> {categories.map((category, index) => {
              return <span key={index}>{!!index ? ', ' : ''}<Link to={`${config.categoryPath}/${category}`}>{category}</Link></span>;
            })}</p>}
            {tags && tags.length > 1 && (
              <div className="tags">
                <p><strong>Tags:</strong></p>
                {tags.map((tag, index) => {
                  //TODO: 
                  // - Get count of number of posts with this tag
                  // - Add `data-badge="#"` to `Link`, replacing '#' w/ tag count
                  return <Link key={index} to={`${config.tagPath}/${tag}`} className="tag badge is-badge-small is-outlined">{replace(tag, '-', ' ')}</Link>
                })}
              </div>
            )}
          </div>
        </div>      
      </Section>
    </div>
  );
};

Author.propTypes = {
  authorName: PropTypes.string.isRequired,
  prefix: PropTypes.string,
  categories: PropTypes.array,
  tags: PropTypes.array,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Author;