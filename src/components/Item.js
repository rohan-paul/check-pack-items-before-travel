import React, { Component } from 'react'
import './Item.css'

class Item extends Component {

    render() {

      const { item, onRemove } = this.props;

      return (
        <article className="Item">
          <label htmlFor={item.id}>
            <input
              type="checkbox"
              checked={item.packed}
              onChange={() => this.props.onToggle(item)}
              id={item.id}
            />
            {item.value}
          </label>
          <button className="Item-remove" onClick={onRemove}>
            Remove
          </button>
        </article>
      );
    }
  }

export default Item;

/* A> The htmlFor property sets or returns the value of the 'for' attribute of a label.

The 'for' attribute specifies which form element a label is bound to.

B> https://reactjs.org/docs/dom-elements.html#htmlfor

Since 'for' is a reserved word in JavaScript, React elements use htmlFor instead. Jus like the case of class and className

C> < const { item, onRemove } = this.props; >  When user clicks on the onRemove button on the individual item > the onRemove funvtion passed-in as prop from its immediate parent Items.js will be called and which in turn will call the passed-in prop, from Items.js's parent Application.js

D> onChange event - https://www.w3schools.com/jsref/event_onchange.asp

The onchange event occurs when the value of an element has been changed.

For radiobuttons and checkboxes, the onchange event occurs when the checked state has been changed.

*/