import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import UserInfo from './UserInfo';

const UserCard = (props) => {
  const { profile, fName, lName, userGender, phone, md5, email } = props;
  return (
    <li className="ui-item" id={md5}>
      <div className="profile">
        <div className="img-wrapper">
          <Image imageURL={profile} imageAlt={fName} />
        </div>
      </div>
      <UserInfo firstName={fName} lastName={lName} gender={userGender} email={email} phone={phone} />
    </li>
  );
};

UserCard.propTypes = {
  profile: PropTypes.string,
  fName: PropTypes.string,
  lName: PropTypes.string,
  userGender: PropTypes.string,
  phone: PropTypes.string,
  md5: PropTypes.string,
  email: PropTypes.string,
};
UserCard.defaultProps = {
  profile: '',
  fName: '',
  lName: '',
  userGender: '',
  phone: '',
  md5: '',
  email: '',
};

export default UserCard;
