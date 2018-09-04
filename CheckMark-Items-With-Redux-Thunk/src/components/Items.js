import React, { Component } from 'react'
import Item from './Item'
import Filter from './Filter'

class Items extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
          };
    }

    updateSearchTerm = searchTerm => {
        this.setState({
            searchTerm
        })
    }
    /* In above, I am using object destructuring syntax. So the single 'searchTerm' is equivalent to doing < searchTerm: searchTerm >  Which effectively means tha I am telling setState 'Hey take the searchTerm argument of updateSearchTerm() function and set them to be the value of the key-value pair of state (which is an object and both the key and the value is called 'searchTerm' ).
    */

    render() {

        const { title, items, onRemove, onToggle } = this.props;

        return (
          <section className="Items">
            <h2>
              {title} ({items.length})
            </h2>
            <Filter searchTerm={this.state.searchTerm} onChange={this.updateSearchTerm} />
            {items
              .filter(item =>
                item.value.toLowerCase().includes(this.state.searchTerm.toLowerCase()),
              )
              .map(item => (
                <Item
                  key={item.id}
                  onToggle={onToggle}
                  onRemove={() => onRemove(item)}
                  item={item}
                />
              ))}
          </section>
        );
      }
    }

export default Items;

/* 1> This items.js component will render all the 'items' passed as a props from parent Application.js component. And what kind of items will be rendered will be determined by the filter conditionalities in the Application.js

2> VERY IMP - Note the line < const { title, items } = this.props; > Before I use a variable inside the return() function, I have to specifically declare the variable.

*********************************

The mechanism and the work-flow of the filter functionality  -

A> The user types something in the <input> field captured by "value" attribute of <input> field.

B> That "value" attribute is assigned to the variable 'searchTerm' (which is a prop passed from parent Items.js to child Filter.js)

C> Then this searchTerm is passed upstream from child to parent and passed as the argument to updateSearchTerm() function. This happens because whatever input 'value' is assigned for searchTerm in Filter.js , in Items.js searchTerm would get the same value.

D) And then in Items.js with setState inside updateSearchTerm() function, this searchTerm will be the new state.

E) And then the updateSearchTerm() function gets passed ONLY in Filter.js inside handleChange() function by the line
< onChange(value) >

But then, I have to execute handleChange() function so the updateSearchTerm() function gets the opportunity to execute as well.

And thats what I do inside the return() statement - handleChange() function gets executed whenever user changes the content of the input field with below line

onChange={this.handleChange}

**************************************

1> updateSearchTerm() - For getting and then rendering ONLY the filtered list of items - I have to get the data from Filter.js - So its a case of child to parent data-flow. Hence in this Items.js (parent) I am defining the updateSearch() function and passing it down to the child Filter.js

IN Filter.js I am consuming this props inside handleChange() with

< const { onChange } = this.props; >


And then withing render()

< const { searchTerm } = this.props; > And then
doing < value = searchTerm >

2> updateSearchTerm() in parent component Items.js - Fundamental explanation why I need it atl - Because I my most fundamental need is to change the searchTerm (the parent state ) to whatever I type. But then, I am updating this searchTerm from the child and passing down 'searchTerm' as a prop from parent to child. And Prop is immutable, so I can not directly change 'searchTerm' in the Filter.js
So, instead I can give the child a function ( updateSeachTerm() in this file ), that the child can call, and that function can manipulate the state.

SO ITS DATA DOWN ACTIONS UP KIND OF FLOW



MORE THEORETICAL POINTS ON <input> and onChange() -

A> The value attribute if input element - specifies the value of an <input> element. The value attribute is used differently for different input types: For "button", "reset", and "submit" - it defines the text on the button. For "text", "password", and "hidden" - it defines the initial (default) value of the input field.

B> onChange() attribute of <input> element - Execute a JavaScript when the user changes the content of an input field:

<input type="text" name="txt" value="Hello" onchange="myFunction(this.value)">

https://www.w3schools.com/Tags/ev_onchange.asp

So, in Filter.js the onChange is not the onChange prop passed from the Parent Items.js but its an attribute of <input> element

And the onChange inside handleChange() is the prop passed from Items.js

*/