'use strict';
const flatten = require('flatten-unflatten').flatten;

let lowercase = (string) => {
    return typeof string === 'string' ? string.toLowerCase() : string;
};
let filters = {
    includes: (value, filter) => {
        // No substring matching against `undefined`
        if (typeof value === 'undefined') {
            return false;
        }
// No substring matching against `null`; only match against `null`
        if ((value === null) || (filter === null)) {
            return value === filter;
        }

        value = lowercase('' + value);
        filter = lowercase('' + filter);
        return value.indexOf(filter) !== -1;
    },
    gt: (value, filter) => {
        return value > filter;
    },
    lt: (value, filter) => {
        return value < filter;
    },
};

function filterSearch(curr, search, comparator) {
    curr = flatten(curr);

    for (let key in search) {
        if (!comparator[key]) {
            comparator[key] = 'includes';
        }

        // search: {name: 123, city: basel}
        // wenn object.name nicht vorhanden, nicht vergleichen und als nicht gefunden deklarieren

        if (!curr[key] || !filters[comparator[key]](curr[key], search[key])) {
            return false;
        }
    }
    return true;

}
function filterAll(curr, search, comparator, searchAllValue) {
    curr = flatten(curr, { arrays: true });

    let found = true;

    for (let key in search) {
        if (!comparator[key]) {
            comparator[key] = 'includes';
        }
        // search: {name: 123, city: basel}
        // wenn object.name nicht vorhanden, nicht vergleichen und als nicht gefunden deklarieren
        if (!curr[key] || !filters[comparator[key]](curr[key], search[key])) {
            found = false;
        }
    }

    for (let key in curr) {
        if (filters.includes(curr[key], searchAllValue) && found) {
            return true
        }
    }
    return false;
}

module.exports = (array, search, comparator, additionalFilters) => {
    additionalFilters && Object.assign(filters, additionalFilters);

    search = flatten(search);
    comparator = flatten(comparator);

    if (search.$) {
        let searchAllValue = search.$;
        delete search.$;

        return array.filter(item => {
            return filterAll(item, search, comparator, searchAllValue);
        });
    } else {
        return array.filter(item => {
            return filterSearch(item, search, comparator);
        });
    }
};