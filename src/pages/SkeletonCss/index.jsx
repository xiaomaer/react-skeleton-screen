import React, { Component } from 'react';
import axios from 'axios';
import './index.scss';

class SkeletonCSS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      init: true,
      users: [],
    };
  }
  componentDidMount() {
    setTimeout(() => {
      axios.get('https://jsonplaceholder.typicode.com/users').then(({ data }) => {
        this.setState({
          init: false,
          users: data,
        });
      });
    }, 1000);
  }
  renderUsers() {
    const { init, users } = this.state;
    if (!init) {
      if (users.length === 0) {
        return (<div className="no-user">暂无用户信息</div>);
      }
      return users.map(item => (
        <div className="user-item" key={item.id}>
          <div className="user-image">
            <img src="http://img.dobit.top/FnKl_x69G-VuBY2PpkkE7TqllYhX-blogthumb" alt={item.name} />
          </div>
          <div className="user-info">
            <div className="user-name">{item.username}</div>
            <div className="user-email">{item.email}</div>
          </div>
        </div>
      ));
    }
    return null;
  }

  render() {
    return (
      <div className="users">
        {this.renderUsers()}
      </div>
    );
  }
}

export default SkeletonCSS;
