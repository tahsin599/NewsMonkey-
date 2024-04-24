import React, { Component } from 'react';
import kakaotalk from './kakaotalk-emoticon.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={kakaotalk}></img>
        
      </div>
    )
  }
}

export default Spinner
