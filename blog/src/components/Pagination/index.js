import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';

import style from './styles';

const Pagination = props => {
  const { themeStyle = style, customStyle = '' } = props;

  return (
    <div className={cx(themeStyle, customStyle)}>
      <p className={'has-text-centered pb-30'}>Showing 1 – 8 of 245 Articles</p>  
      <div className={'columns is-centered'}>
        <div className={'column is-narrow'}>
          <nav className={'pagination is-centered is-medium'} role='navigation' aria-label='pagination'>
            <a className={'pagination-previous'}>Previous</a>
            <ul className={'pagination-list'}>
              <li><a className={'pagination-link is-current'} aria-label='Goto page 1'>1</a></li>
              <li><a className={'pagination-link'}  aria-label='Goto page 2'>2</a></li>
              <li><a className={'pagination-link'}  aria-label='Goto page 3'>3</a></li>
              <li><a className={'pagination-link'}  aria-label='Goto page 4'>4</a></li>
              <li><a className={'pagination-link'}  aria-label='Goto page 5'>5</a></li>
              <li><a className={'pagination-link'}  aria-label='Goto page 6'>6</a></li>
              <li><a className={'pagination-link'}  aria-label='Goto page 7'>7</a></li>
              <li><a className={'pagination-link'}  aria-label='Goto page 8'>8</a></li>
              <li><a className={'pagination-link'}  aria-label='Page 9' aria-current='page'>9</a></li>
              <li><a className={'pagination-link'}  aria-label='Goto page 10'>10</a></li>
            </ul>
            <a className={'pagination-next'}>Next page</a>
          </nav>
        </div>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Pagination;