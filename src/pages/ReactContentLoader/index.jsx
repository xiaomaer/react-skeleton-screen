import React from 'react';
import ContentLoader, { Facebook, Instagram, Code, List, BulletList } from 'react-content-loader';

const index = () => (
  <div style={{ padding: '15px' }}>
    <h1>基本样式:</h1>
    <ContentLoader width="500" height="100" />
    <h1>Facebook Style:</h1>
    <Facebook />
    <h1>Instagram Style:</h1>
    <Instagram />
    <h1>Code Style:</h1>
    <Code />
    <h1>List Style:</h1>
    <List />
    <h1>BulletList Style:</h1>
    <BulletList />
    {/* 自定义，可通过在线工具自定义绘制 */}
    <h1>自定义SVG Style:</h1>
    <ContentLoader>
      {/* Pure SVG */}
      <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
      <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
      <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
    </ContentLoader>
    <h1>自定义SVG Style:</h1>
    <ContentLoader height={140} speed={1} primaryColor="#333" secondaryColor="#999">
      {/* Pure SVG */}
      <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
      <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
      <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
    </ContentLoader>
  </div>
);

export default index;
