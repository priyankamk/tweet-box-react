import React from 'react';
import './Bar.css';

export default function Bar(props) {
  // var width = props.width

  var barStyle = { width: `${props.width}%` }

  return (
    <div className="bar-wrapper">
      <div style={barStyle} className="bar">
      </div>
    </div>
  )
}


