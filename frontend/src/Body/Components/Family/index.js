import React from 'react';
import './Family.css';
import Box from '../Box';

export default function Family(props) {
  const Boxes = props.data.map((x) => {
    return <Box data={x} />;
  });
  return <div className='Family'>{Boxes}</div>;
}
