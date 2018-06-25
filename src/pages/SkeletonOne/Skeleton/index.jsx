import React from 'react';
import './index.scss';

const Skeleton = () => (
  <div className="user-item-sekeleton">
    <div className="animated-background">
      <div className="background-masker header-top" />
      <div className="background-masker header-left" />
      <div className="background-masker header-right" />
      <div className="background-masker header-bottom" />
      <div className="background-masker subheader-left" />
      <div className="background-masker subheader-right" />
      <div className="background-masker subheader-bottom" />
    </div>
  </div>
);

export default Skeleton;
