import React from 'react';
import './FamilyBox.css';
import Row from './Row';
import _ from 'lodash';

export default function FamilyBox(props) {
  const parent_box = [<Row data={[props.parent]} />];

  // Search for parent's children
  var parent_childs = [];
  // if (props.parent.type === 'alpha') {
  //   var parent_ids = [props.parent.id];
  //   var keep_searching = true;
  //   while (keep_searching) {
  //     for (var parent_id of parent_ids) {
  //       const childs = _.find(props.data, { parent_id: parent_id });
  //       if (childs) {
  //         parent_childs.push(<Row data={childs} />);
  //         parent_ids = [];
  //         for (var child of childs) {
  //           parent_ids.push(child.id);
  //         }
  //       } else {
  //         keep_searching = false;
  //       }
  //     }
  //   }
  // }

  return <div className='FamilyBox'></div>;
}
