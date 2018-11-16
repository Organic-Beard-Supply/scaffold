import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { cx } from 'emotion';
import Moment from 'react-moment';

import Image from 'components/Image';

import style from './styles';

const PostPreview = props => {
  const { post, themeStyle = style, customStyle = 'column is-4' } = props;

  console.log(post);

  const {
    node: {
      fields: { prefix, slug },
      frontmatter: { title, cover, categories },
      excerpt
    }
  } = post;
  
  const {
    childImageSharp: {
      fluid: { src }
    }
  } = cover;

  return (
    <div className={cx(themeStyle, customStyle)}>
      <Link to={`/${slug}`} className="event-card">
        <div className="card-date">
          <div className="date">
            <span className="day"><Moment date={prefix} format="DD"></Moment></span>
            <span className="month"><Moment date={prefix} format="MMM"></Moment></span>
          </div>
        </div>
        <div className="img-container">
        <Image src={src} />
        </div>
        <div className="card-text">
          <div className="text text-container">
            <div className="text text-header">
              {categories && categories.length > 0 && <p className="text text-subtitle category is-expression">{categories[0]}</p>}
              <h2 className="text dark-text text-title">{title}</h2>
            </div>
            <div className="text text-details">
              <p className="text text-description">{excerpt}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

PostPreview.propTypes = {
  post: PropTypes.object.isRequired,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default PostPreview;