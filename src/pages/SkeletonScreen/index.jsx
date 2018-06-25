import React, { Component } from 'react';
import axios from 'axios';
// import Skeleton from 'react-loading-skeleton';
import UserDetailPage from './UserDetail/UserDetailPage';
import './index.scss';

class SkeletonScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    setTimeout(() => {
      axios.get('https://jsonplaceholder.typicode.com/users').then(({ data }) => {
        this.setState({
          users: data,
        });
      });
    }, 1000);
  }
  renderUserItem() {
    const users = this.state.users.map(item => (
      <div className="user-item" key={item.id}>
        <div className="user-image" />
        <div className="user-info">
          <div className="user-name">{item.username}</div>
          <div className="user-phone">{item.phone}</div>
        </div>
      </div>
    ));
    return users;
  }
  renderSelector() {
    return (
      <UserDetailPage user={this.state.users[0]} />
    );
  }
  render() {
    // react-loading-skeleton
    // const username='';
    /* return (
      <div style={{ fontSize: 20, lineHeight: 2 }}>
        <h1>{username || <Skeleton />}</h1>
        <div style={{ width: '200px' }}>{username || <Skeleton />}</div>
      </div>
    ); */

    // react-skeletor
    return (<div className="users">{this.renderSelector()}</div>);
  }
}

export default SkeletonScreen;
