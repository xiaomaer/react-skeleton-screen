import React, { Component } from 'react';
import axios from 'axios';
import classNames from 'classnames';
import UserCard from './UserCard';
import './index.scss';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      init: true,
    };
  }
  componentDidMount() {
    axios.get('https://randomuser.me/api', {
      params: {
        results: 50,
        inc: 'name,gender,phone,email,picture,login',
      },
    }).then((response) => {
      if (response.status === 200) {
        const users = response.data.results.map(data => ({
          profile: data.picture.large,
          fName: data.name.first,
          lName: data.name.last,
          email: data.email,
          userGender: data.gender,
          phone: data.phone,
          md5: data.login.md5,
        }));
        setTimeout(() => {
          this.setState({
            users,
            init: false,
          });
        }, 1000);
      }
    });
  }
  renderUserList() {
    const { users, init } = this.state;
    // skeleton screen
    if (init) {
      // 生成随机ID
      const mockData = new Array(10).fill(1).map(() => Math.random().toFixed(5));
      return mockData.map(item => <UserCard key={item} />);
    }
    // 真实界面
    return users.map(item => <UserCard key={item.md5} {...item} />);
  }
  render() {
    const { init } = this.state;
    const ConditionalClass = classNames({
      'user waiting-on-data': init,
      user: !init,
    });
    return (
      <div className="skelecon-screen">
        <ul className={ConditionalClass}>
          {this.renderUserList()}
        </ul>
      </div>
    );
  }
}

export default UserList;
