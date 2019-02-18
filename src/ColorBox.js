import React, { Component } from 'react'

export default class ColorBox extends Component {
  render () {
    const result = this.props.opacity

    if (result >= 0.2) {
      return (
        <div className='color-box' style={{ opacity: result }}>
          <ColorBox opacity={result - 0.1} />
        </div>
      )
    } else {
      return null
    }
  }
}
