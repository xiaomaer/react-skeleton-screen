import React, { Component } from 'react';
import axios from 'axios';
import classNames from 'classnames';
import Image from './Image';
import './index.scss';

class Skeleton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestFinish: false,
      user: {},
    };
  }
  componentDidMount() {
    setTimeout(() => {
      axios.get(' https://jsonplaceholder.typicode.com/users/1').then(({ data }) => {
        this.setState({
          requestFinish: true,
          user: data,
        });
      });
    }, 1000);
  }
  render() {
    const { requestFinish, user } = this.state;
    const conditionalClass = classNames({
      'component waiting-on-data': !requestFinish,
      component: requestFinish,
    });
    return (
      <div className={conditionalClass}>
        <div className="title">
          <h2>用户信息</h2>
        </div>
        <div className="component-inner">
          <div className="block">
            <span className="block-left">
              <strong>头像</strong>
            </span>
            <span className="block-right">
              <Image src={user.picurl} />
            </span>
          </div>
          <div className="block">
            <span className="block-left">
              <strong>姓名</strong>
            </span>
            <span className="block-right">
              <p className="with-preview">{user.username}</p>
            </span>
          </div>
          <div className="block">
            <span className="block-left">
              <strong>邮箱</strong>
            </span>
            <span className="block-right">
              <p className="with-preview">{user.email}</p>
            </span>
          </div>
          <div className="block">
            <span className="block-left">
              <strong>电话</strong>
            </span>
            <span className="block-right">
              <p className="with-preview">{user.phone}</p>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Skeleton;
