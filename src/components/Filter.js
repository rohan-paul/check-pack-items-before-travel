import React, { Component } from 'react';
import './Filter.css'

class Filter extends Component {

// note onChange and searchTerm were the props that were handed-down from Items.js
// and so first to access / consume it inside the child I have to do a this.props
// And because this is a Functional Component without constructor, so I don't need to
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

A> The value attribute of input element - specifies the value of an <input> element. The value attribute is used differently for different input types: For "button", "reset", and "submit" - it defines the text on the button. For "text", "password", and "hidden" - it defines the initial (default) value of the input field.

B> onChange() attribute of <input> element - Execute a JavaScript when the user changes the content of an input field:

<input type="text" name="txt" value="Hello" onchange="myFunction(this.value)">

https://www.w3schools.com/Tags/ev_onchange.asp

So, in this Filter.js inside return() ( in the line < onChange={this.handleChange} > ) the onChange is not the onChange prop passed from the Parent Items.js but its an attribute of < input > element

However, the onChange inside handleChange() is the prop passed from Items.js


**************************

VERY IMPORTANT - General notes on onChange()

/home/paul/codes-Lap/Curated-List-For-JavaScript-Interviews/React/onChange-In-React.md

Unlike HTML, React components must represent the state of the view at any point in time and not only at initialization time.

So, Basically, you can't easily rely on the input field because the state needs to come from the React app's state, not from the browser's idea of what the value should be.

So, here, the 'searchTerm' can NOT get updated from browser's <input> element's value attribute.

INSTEAD 'searchTerm' has to be updated from the state and flow down below. And that searchTerm state is in the parent Item.js component, and from this child Filter.js component, I am just passing the input data upstreap which will update that state in the parent.

*/