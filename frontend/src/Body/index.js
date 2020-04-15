import React from 'react';
import _ from 'lodash';
import Tree from './Components/Tree';
import './Body.css';

export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // Check if there's data to work with
    var top_parents = [];
    if (this.props.data) {
      // Get top parents that has no parent => parent_id=null
      top_parents = _.filter(this.props.data, { parent_id: null });
      top_parents = top_parents.map((parent) => {
        return <Tree parent={parent} data={this.props.data} />;
      });
    } else {
      top_parents.push([<div>NO DATA</div>]);
    }

    return <div className='Body'>{top_parents}</div>;
  }
}
