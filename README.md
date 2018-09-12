# deep-array-filter
Filters an array of objects.

```
npm i deep-array-filter
```

### Define your filter values:
the property `$` will search in all keys.
```js
let filterBy = {
    $: 'wayne',
    firstname: 'john',
    age: 18,
    address: {
        city: 'Basel'
    }
};
```

### FilterTypes
Define type of your filters:

If not defined it will default to `includes`.
```js
let filterTypes = {
    age: 'gt',
    address: { 
        city: 'gt' 
    }
}
```

### Execute the filter
```js
let filteredArr = filter(arr, filterBy, filterTypes)
```

<hr>

## Filters
Currently there are following filters defined:
- includes - substring matching
- gt - greater than
- lt - less than

If you need more, open an Issue or send a PR.

### extend filterTypes
If you need more or different filters, you can provide you custom compare functions.
```js
let filterType = {
    age: 'customFilter'
};

let comparator = {
    customFilter: (value, filter) => {
        return value > filter;
    }
};

let filteredArr = filter(arr, filterBy, filterTypes, comparator)
```