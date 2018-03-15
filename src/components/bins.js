import React, { Component } from 'react';
import axios from 'axios';
import Bin from './bin'
import { Link } from 'react-router-dom';

export default class Bins extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bins: []
    }
  }

  componentDidMount = () => {
    axios.get('http://localhost:3024/api/bins').then(response => {
      this.setState({
        bins: response.data
      });
    });
  }

  render() {
    return(
      <div>

        {this.state.bins.map(bin => {
          const binName = bin.bin_name;
          const binId = bin.id;
          const hasItem = bin.hasItem
          return <Link to={`/items/${bin.id}`}><Bin binName= {binName} binId={binId} hasItem={hasItem} /></Link>
          console.log(hasItem)
        })}

      </div>
    )
  }
}