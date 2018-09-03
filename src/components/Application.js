import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';
import CountDown from './CountDown';
import NewItem from './NewItem';
import Items from './Items';

import './Application.css';

const defaultState = [
    { value: 'Pants', id: uniqueId(), packed: false },
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
  ];

  class Application extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: defaultState
          };
    }

    /* 1> Function to add items to the top of the list of items, by typing things. In the input field of the NewItem.js
    2> this is again, example of passing data from child to parent and changing the state of the parent. passing this addItem CB as a prop ot NewItem child with with onSumbit={ this.addItem }
    Then executing this addItem in the child inside the return() by doing
    <onSubmit={ this.handleSubmit } >
     */
    addItem = item => {
        this.setState({
            items: [item, ...this.state.items]
        })
    }

    // Remove a given item, by returning all the items the ids of which dont match the itemToRemove's id
    removeItem = itemToRemove => {
        this.setState({
            items: this.state.items.filter(item => item.id !== itemToRemove.id)
        })
    }


    render() {
      // Get the items from state
      const { items } = this.state;
      const packedItems = items.filter(item => item.packed)
      const unpackedItems = items.filter(item => !item.packed)

      return (
        <div className="Application">
          <NewItem onSubmit={ this.addItem } />
          <CountDown />
          <Items title="Unpacked Items" items={ unpackedItems } onRemove={ this.removeItem } />
          <Items title="Packed Items" items={ packedItems } onRemove={ this.removeItem } />
          <button className="button full-width">Mark All As Unpacked</button>
        </div>
      );
    }
  }

export default Application;


/* 1> uniqueId - https://github.com/lodash/lodash/blob/master/uniqueId.js

 Generates a unique ID. If `prefix` is given, the ID is appended to it.


 2> Although, here, I am for the items state, I am using array, for simplicity, but for more performant application, having this state in an object as key-value pair is better.
*/