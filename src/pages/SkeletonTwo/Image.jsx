import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => {
  const { imageURL, imageAlt } = props;
  if (typeof imageURL === 'string') {
    return <img src={imageURL} alt={imageAlt} />;
  }
  return <img alt="placeholder" />;
};

Image.propTypes = {
  imageURL: PropTypes.string,
  imageAlt: PropTypes.string,
};
Image.defaultProps = {
  imageURL: '',
  imageAlt: '',
};

export default Image;
