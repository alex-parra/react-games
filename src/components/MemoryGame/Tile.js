import React from 'react';

const Tile = (props) => {
  const {icon} = props;
  return <div className="Tile">
    <i className={`fa fa-${icon}`}></i>
  </div>
}

export default Tile;
