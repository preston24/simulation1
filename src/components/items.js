import React, { Component } from 'react';
import axios from 'axios';
import Item from './item';

export default class Items extends Component {
  constructor() {
    super();

    this.state = {
      items: [],
    }
  }

  componentDidMount = () => {
    axios.get('http://localhost:3024/api/items/1').then(response => {
      this.setState({
        items: response.data
      });
    });
  }

  

  render() {
    return(
      <div>

        {this.state.items.map(item => {
          console.log(this.state.items)
          const itemName = item.item_name;
          const itemId = item.id
          const price = price
          return <Item itemName={itemName} itemId={itemId} price={price} />
        })}

      </div>
    )
  }
}