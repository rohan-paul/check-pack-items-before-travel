class Item extends Component {
    render() {
        const { item } = this.props;
        return (
            <article className="Item">
                <label htmlFor={item.id}>
                    <input
                    type="checkBox"
                    checked={item.packed}
                    onChange={() => {}}
                    id={item.id}
                    />
                    {item.value}
                </label>
                <button className="Item-remove" onClick={() => {}}>
                    Remove
                </button>
            </article>
        );
    }
}

export default Item;

/* A> The htmlFor property sets or returns the value of the for attribute of a label.

The for attribute specifies which form element a label is bound to.

B> https://reactjs.org/docs/dom-elements.html#htmlfor
Since for is a reserved word in JavaScript, React elements use htmlFor instead.

C>
*/