import React, { Component } from 'react';
import ReactPlaceholder from 'react-placeholder';
import { TextBlock, MediaBlock, TextRow, RectShape, RoundShape } from 'react-placeholder/lib/placeholders';
import './index.scss';

class ReactPlaceholderEg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
    };
  }
  render() {
    const awesomePlaceholder = (
      <div className="my-awesome-placeholder">
        <RectShape color="grey" style={{ width: 30, height: 80 }} />
        <TextBlock rows={4} color="yellow" />
      </div>
    );
    return (
      <div style={{ padding: '10px' }}>
        <ReactPlaceholder showLoadingAnimation ready={this.state.ready} type="media" rows={3}>
          <p>This is a Test.</p>
        </ReactPlaceholder>
        <ReactPlaceholder ready={this.state.ready} customPlaceholder={awesomePlaceholder}>
          <p>This is a Test.</p>
        </ReactPlaceholder>
      </div >
    );
  }
}

export default ReactPlaceholderEg;
