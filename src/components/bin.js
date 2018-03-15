import React, { Component } from 'react';

class Bin extends Component {
  render() {
    return(
      <div>
        {this.props.hasItem ? 
        <div className="bins">
          <h2> Bin {this.props.binName} </h2>
        </div> :
          <div className="emptyBins">
            <h2> + ADD INVENTORY </h2>
          </div>
        }
      </div>
    )
  }
}

export default Bin;