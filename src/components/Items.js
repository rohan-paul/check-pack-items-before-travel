import React, { Component } from 'react'
import Item from './Item'
import Filter from './Filter'

class Items extends Component {
        
        state = {
          // What state does this component have?
        };

    updateSearchTerm = searchTerm => {}

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

/*

1> VRY IMP - Note the line < const { title, items } = this.props; > Before I use a variable inside the return() function, I have to specifically declare the variable.


*/