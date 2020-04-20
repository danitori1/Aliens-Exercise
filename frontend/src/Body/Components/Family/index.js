import React from 'react';
import './Family.css';
import Box from '../Box';
import _ from 'lodash';

export default function Family(props) {
  const Boxes = props.data.map((x) => {
    return <Box data={x} onClickEditData={(data) => props.onClickEditData(data)} all_data={props.all_data} />;
  });
  console.log(props.data[0]);

  var childs = props.data[0] ? _.filter(props.all_data, { parent_id: props.data.id }) : undefined;
  var child_number = childs ? props.data.length : 0;
  if (childs) {
    var right = props.data.length === 1 ? 0 : `calc(100% / ${props.data.length * 2})`;
    var width = props.data.length === 1 ? '5px' : `calc(100% / (${props.data.length / (props.data.length - 1)}))`;
  } else {
    var right = '0px';
    var width = '0px';
  }
  console.log(right, width);
  return (
    <div className='Family'>
      <div className={`FamilyLine ${props.top}`} style={{ right: right, width: width }}></div>
      <div className='FamilyBoxes'>{Boxes}</div>
    </div>
  );
}
