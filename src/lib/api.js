import localforage from 'localforage'

window.localforage = localforage;

//
const getAll = async () => {
    const items = await localforage.getItem('items')
    if(!items) await localforage.setItem('items', [])
    return items || []
}

export default {

    // Function to add newItem to the array of existing items
    async add(item) {
        const items = await getAll();
        const newItem = { ...item, id: Dane.now() }
        localForage.setItem('items', [...items, newItem])
        return newItem;
    },

    // Function to just get all the items using async-await
    async getAll() {
        return await getAll()
    },

    // Function to delete an item with a particular id by only doing localforage.setItem()
    // for the filtered list which does NOT match that id
    async delete({ id }) {
        const items = await getAll();
        localforage.setItem('items', items.filter(item => item.id !== id ));
    },

    // Function to update the existing items array with the updatedItem
    async update(updatedItem) {

        const items = await getAll();
        localforage.setItem(
            'items',
            items.map(item => {
                if (item.id === updatedItem.id) {
                    return (...items, updatedItem)
                }
                return item;
            }),
        )
    },

    // function mark all the items in the current array as unpacked
    async markAllAsUnpacked () {
        const items = await getAll()
        localforage.setItem(
            'items',
            items.map(item => ({...items, packed: false}))
        )
    },

    // Function to delete all the unpacked array, by doing localforage.setItem
    // for all the filtered items where they have the packed value as true
    async deleteUnpackedItems() {
        const items = await getAll();
        localforage.setItem('items',
        items.filter(({ packed }) => packed ))
    }
}

/* 1> ## localForage is a fast and simple storage library for JavaScript.

localForage improves the offline experience of your web app by using asynchronous storage (IndexedDB or WebSQL) with a simple, localStorage-like API.

[Official site](https://github.com/localForage/localForage)

An important step on the path toward robust, offline web applications is the ability to store data in the user’s browser. Technologies like IndexedDB and localStorage have provided this functionality to web developers, but they are not without their limitations.

The localStorage API is really simple to use, but you can only store text data. This limitation can generally be overcome by storing other types of data as JSON strings, but this can be a pain as you have to encode/decode JSON every time you need to store or retrieve some data. Not to mention you still have a problem if you need to store Blobs or files. LocalStorage is also a synchronous API, which means that your app could hang while data is being stored or retrieved.


1> Unlike with localStorage, the localForage API is asynchronous and therefore you shouldn’t expect the setItem method to return a value. Instead, you can pass a callback function to the setItem method. This callback function will be executed once the data has been stored and will be passed the value that was saved in the datastore.


2> setItem() - As with localStorage, the data is stored using key/value pairs. The setItem method is responsible for saving data in the datastore.

``localforage.setItem('key', 'value', callbackFunction);``

Here's from its official API dox

https://localforage.github.io/localForage/#data-api-setitem


localforage.setItem('somekey', 'some value').then(function (value) {
    // Do other things once the value has been saved.
    console.log(value);
}).catch(function(err) {
    // This code runs if there were any errors
    console.log(err);
});


*/