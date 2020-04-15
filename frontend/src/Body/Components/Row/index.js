import React from 'react';
import './Row.css';
import Family from '../Family';

export default function Row(props) {
  const Families = props.data.map((x) => {
    return <Family data={x} />;
  });
  return <div className='Row'>{Families}</div>;
}
