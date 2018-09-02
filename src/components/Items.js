import React, { Component } from 'react'
import Item from './Item'
import Filter from './Filter'

class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    updateSearchTerm = searchTerm => {}

    render() {
        return (
            <section className="Items">
                <h2>
                    {title} ({Items.length})
                </h2>
                <Filter searchTerm={""} onChange={this.updateSearchTerm} />
                {items
                    .filter(item =>
                        item.value.toLowerCase().includes("".toLowerCase()),
                    )
                    .map(item =>
                        <Item
                            key={item.id}
                            onCheckOff={() => {}}
                            onRemove={() => {}}
                            item={item}
                        />
                    )}
            </section>
        );
    }
}

export default Items;