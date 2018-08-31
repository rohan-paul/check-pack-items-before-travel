import React from 'react';
import uniqueId from 'lodash/uniqueId'

import './NewItem.css';

class NewItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
         };
    }

    // note the arrow function does not need to be binded seperately as its will auto-bind
    // So handleChange() will set the state.value to whatever I type in the input field
    // And then handleChange() will work with that value i.e. submit that value
    handleChange = event => {
        const value = event.target.value;
        this.setState({ value })
    }

    handleSubmit = event => {
        const { onSubmit } = this.props;
        const { value } = this.state;

        event.preventDefault();

        onSubmit({value, id: uniqueId, packed: false})
        this.setState({value : ''})
    }

    render() {
        return (
            <form className="NewItem" onSubmit={this.handleSubmit}>
                <input
                    className="NewItem-input"
                    type="text"
                    value={value}
                    onChange={this.handleChange}
                    />
                <input type="button" className="NewItem-submit button"/>
            </form>
        );
    }
}

export default NewItem;

/* The props handed down to NewItem.js from Application.js were ``onSubmit``.

And here in this child component I will assign the function handleSubmit(event) to this onSubmit prop */