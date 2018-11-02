import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';

import style from './styles';

const Image = props => {
  const { themeStyle = style, customStyle = '', slant, src } = props;

  if (slant) {
    const bgImgStyle = {
      backgroundImage: `url(${src})`
    }
    
    return (
      <div className={cx(themeStyle, customStyle)} style={bgImgStyle}>
        <div className="top-slant"></div>
        <div className="bottom-slant"></div>
      </div>
    );
  } else {
    return <div></div>
  }
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  slant: PropTypes.bool,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Image;
