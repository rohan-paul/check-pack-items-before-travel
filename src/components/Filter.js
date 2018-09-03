import React, { Component } from 'react';
import './Filter.css'
class Filter extends Component {

// note onChange and searchTerm were the props that were handed-down from Items.js
// and so first to access / consume it inside the child I have to do a this.props
// And because this is a Functional Component without constructor, so I dont't need to
// declare super(props) before using this.props
// note the onChange() inside handleChange() is NOT an event attribute but the props passed from parent Items.js to

    handleChange = event => {
        const { onChange } = this.props;
        const value = event.target.value;
        onChange(value)
    }

    render() {
        const { searchTerm } = this.props;
        return (
            <input
                className="Items-searchTerm"
                value={searchTerm}
                onChange={this.handleChange}
                />
        );
    }
}

export default Filter;

/*

A> The value attribute if input element - specifies the value of an <input> element. The value attribute is used differently for different input types: For "button", "reset", and "submit" - it defines the text on the button. For "text", "password", and "hidden" - it defines the initial (default) value of the input field.

B> onChange() attribute of <input> element - Execute a JavaScript when the user changes the content of an input field:

<input type="text" name="txt" value="Hello" onchange="myFunction(this.value)">

https://www.w3schools.com/Tags/ev_onchange.asp

So, in Filter.js inside return() ( in the line < onChange={this.handleChange} > ) the onChange is not the onChange prop passed from the Parent Items.js but its an attribute of < input > element

And the onChange inside handleChange() is the prop passed from Items.js

*/