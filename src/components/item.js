import React, { Component } from 'react';
import axios from 'axios';

class Item extends Component {
  constructor() {
    super();

    this.state = {
      itName: null,
      itPrice: 0
    }
  }

    handleItemChange = (itName) => {
      this.setState({
        itName: itName
      })
      console.log('this is item name', this.state.itName);
    }
  
    handlePriceChange = (itPrice) => {
      this.setState({
        itPrice: itPrice
      })
      console.log('this is the price', this.state.itPrice);
    }

    createItem = () => {
      console.log(this)
      const {itemId} = this.props;
      const {itName, itPrice} = this.state;
      axios.post(`http://localhost:3024/api/items/${itemId}`, {itName, itPrice}).then(response => {
        this.setState({
          itName: itName,
          itPrice: itPrice
        });
      });
      console.log("this is the state", this.state)
    }
  

  render() {
    return(
      <div className="items">
        <h1> Name </h1>
        <input id="inputboxes" onChange={(e) => this.handleItemChange(e.target.value)} />
        <h1> Price </h1>
        <input id="inputboxes" placeholder="$0" onChange={(e) => this.handlePriceChange(e.target.value)} />
        <button onClick={this.createItem}> + ADD INVENTORY </button>
      </div>
    )
  }
}

export default Item;