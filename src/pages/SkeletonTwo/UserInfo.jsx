import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = (props) => {
  const { firstName, lastName, gender, email, phone } = props;
  return (
    <div className="user-info">
      <div className="name">{firstName} {lastName}</div>
      <div className="gender">{gender}</div>
      <div className="email">{email}</div>
      <div className="phone">{phone}</div>
    </div>
  );
};

UserInfo.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  gender: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
};
UserInfo.defaultProps = {
  firstName: '',
  lastName: '',
  gender: '',
  email: '',
  phone: '',
};
export default UserInfo;
