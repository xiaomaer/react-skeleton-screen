import React from 'react';
import PropTypes from 'prop-types';
import { createSkeletonProvider } from '@trainline/react-skeletor';
import NameCard from './NameCard';

const UserDetailPage = ({ user }) => (
  <div>
    <NameCard {...user} />
  </div>
);

UserDetailPage.propTypes = {
  user: PropTypes.object,
};
UserDetailPage.defaultProps = {
  user: undefined,
};

export default createSkeletonProvider(
  // Dummy data with a similar shape to the component's data
  {
    // 下面数据可以不定义
    user: {
      username: '_____',
      phone: '________',
    },
  },
  // Predicate that returns true if component is in a loading state
  ({ user }) => user === undefined,
  // Define the placeholder styling for the children elements,
  () => ({
    color: '#ddd',
    backgroundColor: '#ddd',
    height: '30px',
    marginBottom: '5px',
  }),
)(UserDetailPage);
