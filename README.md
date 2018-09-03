# deep-array-filter
Filters an array of objects.

#### Define your filter values:
the property `$` will search in all keys.
```
let filter = {
    $: wayne,
    firstname: 'joh',
    age: 18
    address: {
        city: 'Basel'
    }
};
```

#### FilterTypes
Define type of your filters:

If not defined it will default to `includes`.
```
let filterType = {
    age: 'gt'
    address: { 
        city: 'gt' 
    }
}
```

#### Execute the filter
```
let filteredArr = filter(arr, values, filterTypes)
```

<hr>

### Filters
Currently there are following filters defined:
- includes - substring matching
- gt - greater than
- lt - less than

If you need more, open an Issue or send a PR.

#### extend filterTypes
If you need more or different filters, you can provide you custom compare functions.
```
let filterType = {
    age: 'customFilter'
}

let comparator = {
    customFilter: (value, filter) => {
        return value > filter;
    }
}

let filteredArr = filter(arr, values, filterTypes, comparator)
```