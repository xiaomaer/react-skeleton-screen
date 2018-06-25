import React from 'react';
import PropTypes from 'prop-types';
import { createSkeletonElement } from '@trainline/react-skeletor';

const H1 = createSkeletonElement('h1');
const H2 = createSkeletonElement('h2');

const NameCard = ({ username, phone }) => (
  <div>
    <H1>{username}</H1>
    <H2>{phone}</H2>
  </div>
);
NameCard.propTypes = {
  username: PropTypes.string,
  phone: PropTypes.string,
};
NameCard.defaultProps = {
  username: undefined,
  phone: undefined,
};

export default NameCard;
