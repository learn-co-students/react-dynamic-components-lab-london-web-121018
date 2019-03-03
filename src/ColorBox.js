import React, { Component } from 'react';

export default class ColorBox extends Component {


  render() {
    const newOpacity = this.props.opacity
    
    return (
      <div className="color-box" style={{opacity: newOpacity }}>

      {newOpacity >= 0.2 ? <ColorBox opacity={newOpacity - 0.1} /> : null}
      </div>
    )
  }

}
