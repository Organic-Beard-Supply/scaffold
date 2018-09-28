import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import { cx } from 'emotion';
import { find, filter } from 'lodash';

import authors from '../../content/meta/authors'

//import Meta from '../Meta';

import style from './styles';

const Blog = props => {
  const {
    items,
    themeStyle = style,
    customStyle = 'columns is-multiline'
  } = props;

  return (
    <div className={cx(themeStyle, customStyle)}>
      {items.map(item => {
        const {
          frontmatter: { title, categories, subTitle, cover, authorName },
          fields: { slug, prefix },
          excerpt
        } = item,
        {
          childImageSharp: {
            fluid: { src }
          }
        } = cover,
        cardStyle = { backgroundImage: 'url(' + src + ')'},
        author = find(authors, ['name', authorName]);
        
        return (
          <div key={slug} className={'column is-6'}>
            <div className={'flex-card is-post light-bordered is-card-reveal'}>
              <Link to={slug} className={'header'} style={cardStyle} >
                <div className={'title-wrapper'}>
                  <h2 className={'post-title'}>{title}</h2>
                  <h4 className={'post-subtitle'}>{subTitle}</h4>
                </div>
                {author && (
                  <div className="author-avatar">
                    <img src={author.avatar} alt={author.name} />
                  </div>
                )}
                <div className="header-overlay"></div>
              </Link>
              <div className="post-body">
                {/* Transfer meta data (author, date, category) to Meta */}

                {/* <Meta
                  categories={categories}
                  prefix={prefix}
                  author={author}
                  categoryLink={false}
                  icons={metaIcons}
                /> */}
                {author && (
                  <div>
                    <span>by</span> <Link className="author-name" to={'#'}><b>{author.name}</b></Link>
                  </div>
                )}
                <small>
                  Posted
                  {categories && (
                    <span> in {categories.map(category => {
                      return <Link to={`/categories/${category}`} key={category} className={'category is-' + category}>
                          {category}
                        </Link>
                      })}
                    </span>
                  )} 
                  {prefix && ( <span> on {prefix}</span> )}
                </small>
                <p>{excerpt}</p>
                <div className="content-footer">
                  <div className="footer-details">
                    <Link to={slug} className="button is-link btn-upper">Read more</Link>
                    <div className="comments-count ml-auto">
                      <i className="im im-icon-Speach-Bubble11"></i>
                      <span className="stat">8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

Blog.propTypes = {
  items: PropTypes.array.isRequired,
  cover: PropTypes.string,
  author: PropTypes.object,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
  columnSize: PropTypes.string
};

export default Blog;
