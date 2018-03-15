import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Bins from './components/bins';
import Shelves from './components/shelves';
import Items from './components/items';


export default (
  <Switch>
    <Route component={ Shelves } exact path="/" />
    <Route component={ Bins } path="/bins/:id" />
    <Route component={ Items } path="/items/:id" />
  </Switch>
)