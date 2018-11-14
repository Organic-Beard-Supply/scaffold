import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'components/Avatar';
import { Link } from 'gatsby';
import { cx } from 'emotion';
// import Moment from 'react-moment';

import style from './styles';

const PostPreview = props => {
  const { post, themeStyle = style, customStyle = 'column is-4' } = props;

  const {
    fields: { prefix , slug },
    frontmatter: { title, authorName },
    excerpt
  } = post;

  return (
    <div className={cx(themeStyle, customStyle)}>
      <Link to={`/${slug}`}  className="flex-card media-card media-card-left light-bordered hover-raised">
        <div className="columns is-gapless is-desktop">  
          <div className="column content-column" style={{minHeight: '260px'}}>
            <div className="mcard-content">
              <h3>{title}</h3>
              <p className="is-hidden-touch" style={{overflow: 'hidden'}}>{excerpt}</p>
            </div>
            <Avatar authorName={authorName} prefix={prefix} />
          </div>
        </div>
      </Link>
    </div>
  )

  // Use the code below when cover photo is available
  // return (
  //   <div className={cx(themeStyle, customStyle)}>
  //     <Link to={`/${slug}`} className="event-card">
  //       <div className="card-date">
  //         <div className="date">
  //           <span className="day"><Moment date={prefix} format="DD"></Moment></span>
  //           <span className="month"><Moment date={prefix} format="MMM"></Moment></span>
  //         </div>
  //       </div>
  //       <div className="img-container">
  //         <img src="https://source.unsplash.com/1081x810/?meditating" alt="" />
  //       </div>
  //       <div className="card-text">
  //         <div className="text text-container">
  //           <div className="text text-header">
  //             <p className="text text-subtitle category is-expression">{categories[0]}</p>
  //             <h2 className="text dark-text text-title">{title}</h2>
  //           </div>
  //           <div className="text text-details">
  //             <p className="text text-description">{excerpt}</p>
  //           </div>
  //         </div>
  //       </div>
  //     </Link>
  //   </div>
  // );
};

PostPreview.propTypes = {
  post: PropTypes.object.isRequired,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default PostPreview;