import React, { Component } from 'react';
import axios from 'axios';
import Skeleton from './Skeleton';
import './index.scss';

import userIcon from '../../images/icon.png';

class SkeletonScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      init: true,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      axios.get('https://jsonplaceholder.typicode.com/users').then(({ data }) => {
        this.setState({
          users: data,
          init: false,
        });
      });
    }, 1000);
  }
  renderUserItem() {
    const users = this.state.users.map(item => (
      <div className="user-item" key={item.id}>
        <div className="user-image">
          <img src={userIcon} alt={item.name} />
        </div>
        <div className="user-info">
          <div className="user-name">{item.username}</div>
          <div className="user-phone">{item.phone}</div>
        </div>
      </div>
    ));
    return users;
  }
  renderSekeleton() {
    const sekeletons = new Array(10).fill(1).map((item, index) => <Skeleton key={index} />);
    return sekeletons;
  }
  render() {
    return (
      <div className="user-list">
        {this.state.init ? this.renderSekeleton() : this.renderUserItem()}
      </div>
    );
  }
}

export default SkeletonScreen;
