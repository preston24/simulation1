import React, { Component } from 'react';
import axios from 'axios';
import Shelf from './shelf'
import { Link } from 'react-router-dom';

export default class Shelves extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shelves: []
    }
  }

  componentDidMount = () => {
    axios.get('http://localhost:3024/api/shelves').then(response => {
      this.setState({
        shelves: response.data
      });
    });
  }

  render() {
    return(
      <div>

        {this.state.shelves.map(shelf => {
          const shelfName = shelf.name;
          const shelfId = shelf.id;
          return <Link to={`/bins/${shelf.id}`}> <Shelf shelfName= {shelfName} shelfId={shelfId} /> </Link>
        })}
        
      </div>
    )
  }
}