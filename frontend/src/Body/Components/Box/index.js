import React from 'react';
import './Box.css';

export default function Box(props) {
  return (
    <div className='Box'>
      <div>ID: {props.data.id}</div>
      <div>NAME: {props.data.name}</div>
      <div>PLANET: {props.data.planet}</div>
    </div>
  );
}
