import React from 'react';
import './Row.css';
import Family from '../Family';

export default function Row(props) {
  var class_last = '';
  if (props.class_last) {
    class_last = props.class_last;
  }
  const Families = props.data.map((x) => {
    return <Family data={x} onClickEditData={(data) => props.onClickEditData(data)} />;
  });
  return <div className={`Row ${class_last}`}>{Families}</div>;
}
