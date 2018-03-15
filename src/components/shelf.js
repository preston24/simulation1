import React, { Component } from 'react';

class Shelf extends Component {
  render() {
    return(
      <div className="shelves">
        <h3> Shelf {this.props.shelfName}</h3>
      </div>
    )
  }
}

export default Shelf;