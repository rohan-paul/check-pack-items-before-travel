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

    2> this is again, example of passing data from child to parent and changing the state of the parent. passing this addItem CB as a prop ot NewItem child with with onSubmit={ this.addItem }
    Then executing this addItem in the child inside the return() by doing
    <onSubmit={ this.handleSubmit } >

    3> In NewItem.js, inside handleSubmit, I have this < onSubmit({ value, id: uniqueId, packed: false }); >
    And note onSubmit is the props with which I am passing addItem, So thats how arguments for a new items is passed to addItem in the child when I type something new in the input field.

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

    /* Toggling the Item, so after clicking on the check-box it goes from unpacked to packed and vice-versa
    A> First while traversing the items, if (item.id !== itemToToggle.id ) then dont touch the item at all. It at all and just return the same.
    B> The part < packed: !itemToToggle.packed > means, I am flipping or toggling the packed property of this itemToToggle.
    So, if it was packed (i.e. itemToToggle.packed was true) now it will be Unpacked (i.e. itemToToggle.packed will be false) - And vice-versa.
    */
   toggleItem = itemToToggle => {

        const items = this.state.items.map(item => {
            if ( item.id !== itemToToggle.id ) {
                return item;
            } else {
                // note here return() is returning an object which is the full itemToToggle item object
                // Because, note each of the items are an object. And the ... spread operator works on the object as well
                return {...itemToToggle, packed: !itemToToggle.packed }
            }
        });
        this.setState({ items })
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
          <Items title="Unpacked Items" items={ unpackedItems } onRemove={ this.removeItem } onToggle={ this.toggleItem } />
          <Items title="Packed Items" items={ packedItems } onRemove={ this.removeItem } onToggle={ this.toggleItem } />
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