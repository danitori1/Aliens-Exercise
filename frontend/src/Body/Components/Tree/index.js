import React from 'react';
import './Tree.css';
import Row from '../Row';
import _ from 'lodash';

export default function Tree(props) {
  // The data model for the tree is going to be a matrix representing:
  // Tree:[
  //   Rows: [
  //       Different families: [
  //          Alien parent data : {}
  //       ]
  //   ]
  // ]

  var keep_search = true;
  var family_tree = [[[props.parent]]];
  var row = 0;

  // Iterate until no new rows
  while (keep_search) {
    var family = 0;
    var families = family_tree[row][family];
    //Iterate through all the parents in the same row
    var new_row = [];
    for (var parent of families) {
      if (parent['type'] === 'alpha') {
        var family = _.filter(props.data, { parent_id: parent.id });
        if (family) {
          new_row.push(family);
        }
      }
    }
    // If there's a new row continue iterating
    if (new_row.length > 0) {
      family_tree.push(new_row);
    } else {
      keep_search = false;
    }
    row += 1;
  }

  const Rows = family_tree.map((row) => {
    return <Row data={row} />;
  });

  return <div className='Tree'>{Rows}</div>;
}
