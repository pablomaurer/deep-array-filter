const filter = require('../index');

// data
let arr = [
    {
        "isActive": true,
        "age": 34,
        "name": "Staci Hogan",
        "company": "EXTRO",
        "adress": {
            city: 'Bern',
            street: 'Yostreet',
        },
        "friends": [
            {
                "name": "Moses Griffin"
            }
        ]
    },
    {
        "isActive": false,
        "age": 25,
        "name": "Hancock Ryan",
        "company": "DUOFLEX",
        "adress": {
            city: 'Bern',
            street: 'Yostreet',
        },
        "friends": [
            {
                "name": "Jeannette Moran"
            },
        ]
    },
    {
        "isActive": true,
        "age": 35,
        "name": "Hebert Bentley",
        "company": "MUSANPOLY",
        "adress": {
            city: 'Bern',
            street: 'Yostreet',
        },
        "friends": [
            {
                "name": "Erica Maddox"
            }
        ]
    }
];

// usage
let comparator = {
    $: 'includes',
    name: 'includes',
    age: 'gt',
    adress: {city: 'includes'}
};

let search = {
    $: 'staci',
};
let search2 = {
    adress: {city: 'Bern'},
    name: 'Staci',
    age: 20
};
let search3 = {
    $: 'hebert',
    age: 30
};

let res = filter(arr, search3, comparator);
console.log('res', res);
