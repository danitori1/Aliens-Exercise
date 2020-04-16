import React from 'react';
import './Box.css';
import _ from 'lodash';

export default class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = _.clone(this.props.data);
    var class_vertical_line = '';
    if (data.parent_id) {
      class_vertical_line = 'up-line';
    }
    return (
      <div className='Box-container'>
        <div className={class_vertical_line}></div>
        <div className='Box' onClick={() => this.props.onClickEditData(data)}>
          <div>ID: {this.props.data.id}</div>
          <div>NAME: {this.props.data.name}</div>
          <div>PLANET: {this.props.data.planet}</div>
        </div>
        <div className='down-line'></div>
      </div>
    );
  }
}
