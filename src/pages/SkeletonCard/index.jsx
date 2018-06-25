import React, { Component } from 'react';
import axios from 'axios';
import './index.scss';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      init: true,
      user: {},
    };
  }
  componentDidMount() {
    setTimeout(() => {
      axios.get('https://jsonplaceholder.typicode.com/users/1').then(({ data }) => {
        this.setState({
          init: false,
          user: data,
        });
      });
    }, 1000);
  }
  renderCardItem() {
    const { user, init } = this.state;
    if (user && !init) {
      return (
        <div className="card-item">
          <div className="user-info">
            <div className="user-image">
              <img src="http://img.dobit.top/FnKl_x69G-VuBY2PpkkE7TqllYhX-blogthumb" alt="用户头像" />
            </div>
            <div className="user-name">{user.username}</div>
          </div>
          <div className="city-info">
            <div className="city-name">{user.address.city}</div>
            <div className="city-desc">{user.address.street}</div>
          </div>
          <div className="read-info">
            <span>浏览量 8316</span>
            <span>评论量 12</span>
          </div>
        </div>
      );
    }
    return null;
  }
  render() {
    return (
      <div className="card">{this.renderCardItem()}</div>
    );
  }
}

export default index;
