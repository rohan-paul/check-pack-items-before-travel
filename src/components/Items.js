import React, { Component } from 'react'
import Item from './Item'
import Filter from './Filter'

class Items extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // What state does this component have?
          };
    }

     updateSearchTerm = searchTerm => {
        this.setState({
            searchTerm
        })
    }

    render() {

        const { title, items } = this.props;

        return (
          <section className="Items">
            <h2>
              {title} ({items.length})
            </h2>
            <Filter searchTerm={''} onChange={this.updateSearchTerm} />
            {items
              .filter(item =>
                // Hmm… this needs some work.
                item.value.toLowerCase().includes(''.toLowerCase()),
              )
              .map(item => (
                <Item
                  key={item.id}
                  onCheckOff={() => {}}
                  onRemove={() => {}}
                  item={item}
                />
              ))}
          </section>
        );
      }
    }

export default Items;

/* 1> This items.js component will render all the 'items' passed as a props from parent Application.js component. And what kind of items will be rendered will be determined by the filter conditionalities in the Application.js

2> VRY IMP - Note the line < const { title, items } = this.props; > Before I use a variable inside the return() function, I have to specifically declare the variable.

*********************************

The mechanism of the filter functionality  -

A> The user types something in the <input> field captured by "value" attribute of <input> field.

B> That "value" attribute is assigned to the variable 'searchTerm' (which is a prop passed from parent Items.js to child Filter.js)

C> Then this searchTerm is passed upstream from child to parent and passed as the argument to updateSearchTerm() function. This happens because whatever input 'value' is assigned for searchTerm in Filter.js , in Items.js searchTerm would get the same value.

D) And then in Items.js with setState inside updateSearchTerm() function, this searchTerm will be the new state.

E) And then the updateSearchTerm() function gets invoked in Filter.js inside handleChange() function by the line 
< onChange(value) > 
And handleChange() function gets invoked when user changes the content of the input field with below line

onChange

**************************************

1> updateSearchTerm() - For getting and then rendering ONLY the filtered list of items - I have to get the data from Filter.js - So its a case of child to parent data-flow. Hence in this Items.js (parent) I am defining the updateSearch() function and passing it down to the child Filter.js

IN Filter.js I am consuming this props inside handleChange() with

< const { onChange } = this.props; >


And then withing render()

< const { searchTerm } = this.props; > And then
doing < value = searchTerm >



A> The value attribute if input element - specifies the value of an <input> element. The value attribute is used differently for different input types: For "button", "reset", and "submit" - it defines the text on the button. For "text", "password", and "hidden" - it defines the initial (default) value of the input field.

B> onChange() attribute of <input> element - Execute a JavaScript when the user changes the content of an input field:

<input type="text" name="txt" value="Hello" onchange="myFunction(this.value)">

https://www.w3schools.com/Tags/ev_onchange.asp

So, in Filter.js the onChange is not the onChange prop passed from the Parent Items.js but its an attribute of <input> element

And the onChange inside handleChange() is the prop passed from Items.js

*/