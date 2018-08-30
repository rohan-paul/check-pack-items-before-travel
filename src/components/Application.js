import React, { Component } from 'react';
import './App.css';
import uniqueId from 'lodash/uniqueId'
import CountDown from './CountDown';
import NewItem from './NewItem';
import Items from './Items';

const defaultState = [
    {value: 'Pants', id: uniqueId(), packed: false},
    { value: 'Jacket', id: uniqueId(), packed: false },
    { value: 'iPhone Charger', id: uniqueId(), packed: false },
    { value: 'MacBook', id: uniqueId(), packed: false },
    { value: 'Sleeping Pills', id: uniqueId(), packed: true },
    { value: 'Underwear', id: uniqueId(), packed: false },
    { value: 'Hat', id: uniqueId(), packed: false },
    { value: 'T-Shirts', id: uniqueId(), packed: false },
    { value: 'Belt', id: uniqueId(), packed: false },
    { value: 'Passport', id: uniqueId(), packed: true },
    { value: 'Sandwich', id: uniqueId(), packed: true },
]

class Application extends Component {
  render() {
    return (
      <div className="App">
        <Countdown />
        <Items title="Unpacked Item" items={[]} />
        <Items title="Packed Item" items={[]} />
        <button className="button full-width">Mark All as Unpacked</button>
      </div>
    );
  }
}

export default Application;


/* uniqueId - https://github.com/lodash/lodash/blob/master/uniqueId.js

 Generates a unique ID. If `prefix` is given, the ID is appended to it.


*/