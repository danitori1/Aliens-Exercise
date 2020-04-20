import React from 'react';
import './Box.css';
import _ from 'lodash';
import alien_logo from '../../../images/alien-logo.svg';

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

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
          <div className='alien-box'>
            <div class={`box-logo ${this.props.data.type}`}>
              <img src={alien_logo} alt='hola' width='70'></img>
            </div>
          </div>
          <div className='Box-data'>
            <div style={{ fontWeight: 'bold', fontSize: '20px', color: '#a30b1a' }}>{this.props.data.name}</div>
            <div style={{ fontSize: '15px' }}>Planet {this.props.data.planet}</div>
            <div style={{ fontSize: '15px' }}>{this.props.data.type.capitalize()}</div>
          </div>
        </div>
        <div className='down-line'></div>
      </div>
    );
  }
}
