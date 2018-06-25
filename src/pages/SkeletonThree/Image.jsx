import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, style }) => (
  <div className="preact-image-mask" style={style}>
    {src ? (<img src={src} style={style} alt="图片" />)
      : (<div className="img-placeholder" />)}
  </div>
);

Image.propTypes = {
  style: PropTypes.object,
  src: PropTypes.string,
};
Image.defaultProps = {
  style: {
    width: '70px',
    height: '70px',
  },
  src: undefined,
};

export default Image;
