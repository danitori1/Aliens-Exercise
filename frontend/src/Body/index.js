import React from 'react';
import _ from 'lodash';

import FamilyBox from './FamilyBox';

export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // Check if there's data to work with
    var top_parents = [];
    if (this.props.data) {
      // Get top parents tha has parent_id=null
      top_parents = _.filter(this.props.data, { parent_id: null });
      top_parents = top_parents.map((parent) => {
        return <FamilyBox parent={parent} data={this.props.data} />;
      });
    } else {
      top_parents.push([<div>NO DATA</div>]);
    }
    console.log(top_parents);
    return <div>{top_parents}</div>;
  }
}
