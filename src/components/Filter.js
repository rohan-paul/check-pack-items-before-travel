import React, { Component } from 'react';
import './Filter.css'
class Filter extends Component {

// note onChange and searchTerm were the props that were handed-down from Items.js
// and so first to access / consume it inside the child I have to do a this.props
// And because this is a Functional Component without constructor, so I dont't need to
// declare super(props) before using this.props

    handleChange = event => {
        const { onChange } = this.props;
        const value = even.target.value;
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