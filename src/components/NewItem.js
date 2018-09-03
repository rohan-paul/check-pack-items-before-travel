import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId'

import './NewItem.css';

class NewItem extends Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    // note the arrow function does not need to be binded separately as its will auto-bind
    // So handleChange() will set the state.value to whatever I type in the input field
    // And then handleSubmit() will work with that value i.e. submit that value
    handleChange = event => {
        // get the value of the field whenever it changes
        const value = event.target.value;
        this.setState({ value })
    }

    handleSubmit = event => {
        const { onSubmit } = this.props;
        const { value } = this.state;

        event.preventDefault();

        onSubmit({value, id: uniqueId, packed: false})

        this.setState({
            value : ''
        })
    }

    render() {
        const { value } = this.state;
        return (
            <form className="NewItem" onSubmit={this.handleSubmit}>
                <input
                    className="NewItem-input"
                    type="text"
                    value={value}
                    onChange={this.handleChange}
                    />
                <input type="submit" className="NewItem-submit button"/>
            </form>
        );
    }
}

export default NewItem;

/* 1> The props handed down to NewItem.js from Application.js were ``onSubmit``.

And here in this child component I will execute the function handleSubmit(event) as soon as the onSubmit() event occurs.

VERY IMPORTANT -A> Within the handleSubmit() function definition the 'onSubmit' is a prop passed from parent Application.js

B> But inside the return() and inside form-input element the onSubmit is the onsubmit Event Attribute which fires when a form is submitted.

2> Note the line < const { value } = this.state; > Before I use a variable inside the return() function, I have to specifically declare the variable.


*/