import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import { cx } from 'emotion';

import style from './styles';

import Avatar from '../../components/Avatar'

const FeaturedPost = props => {
  const {
    item,
    themeStyle = style,
    customStyle = ''
  } = props;

  const {
    frontmatter: { title, categories, cover, authorName },
    fields: { slug, prefix },
    excerpt
  } = item;
  
  const {
    childImageSharp: {
      fluid: { src }
    }
  } = cover;
  
  const imgStyle = { 
    backgroundImage: 'url(' + src + ')',
    backgroundClip: 'content-box',
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%!important',
    minHeight: '260px',
    padding: '15px',
    width: '100%'
  };
  
  return ( 
    <div className={cx(themeStyle, customStyle)}>
      <div id={'main-hero'} className={'hero-body'}>
        <div className={'container'}>
          <div className={'columns is-vcentered is-centered'}>
            <div className={'column is-8'}>
              <span className={'tag squared is-medium is-primary mb-5'}>Featured Article</span>
              <div className={'flex-card media-card media-card-left light-bordered light-raised'}>
                <div className={'columns is-gapless is-desktop no-padding-right no-padding-left'}>
                  <div className={'column is-4 media-stretch'}>
                    <Link to={slug}>
                      <div style={imgStyle}></div>
                    </Link>
                  </div>
                  <div className={'column content-column'}>
                    <div className={'mcard-content'}>
                      <h2 className={'mcard-title'}>
                        <Link to={slug}>{title}</Link>
                      </h2>
                      <p className={'mcard-description'}>{excerpt} <Link to={slug}>read more</Link></p>
                    </div>
                    <Avatar authorName={authorName} prefix={prefix} categories={categories} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}

FeaturedPost.propTypes = {
  item: PropTypes.object.isRequired,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string
}

export default FeaturedPost;