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
    var family_index = 0;
    var families = family_tree[row][family_index];
    //Iterate through all the parents in the same row
    var new_row = [];
    for (var parent of families) {
      if (parent['type'] === 'alpha') {
        // Search all the childs with parent_id
        var family = _.filter(props.data, { parent_id: parent.id });
        if (family) {
          new_row.push(family);
        }
      } else {
        // Push empty row when there's no child for spacing
        new_row.push([]);
        keep_search = false;
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

  const Rows = family_tree.map((row, index) => {
    // Remark penultimate row for design
    var class_last;
    if (index === family_tree.length - 2) {
      class_last = 'last-row';
    }

    return <Row data={row} onClickEditData={(data) => props.onClickEditData(data)} class_last={class_last} />;
  });

  return <div className='Tree'>{Rows}</div>;
}
