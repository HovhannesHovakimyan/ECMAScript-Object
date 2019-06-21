const x = 10;
const y = 30;

// pre-ECMAScript 2015
const poiint = {
    x: x,
    y: y,

    draw: function() {
        //...
    }
};

// after ECMAScript 2015
const p = {
    x,
    y,

    draw(ctx) {
        //...
    }
};

/* ************************************ */

const prefix = '_blah_';

const data = {
    [prefix + 'name']: 'Bob',
    [prefix + 'age']: 23
};

console.log(data);

/* ************************************ */

const defaults = {
    host: 'localhost',
    dbName: 'blog',
    user: 'admin'
};

const opts = {
    user: 'john',
    password: 'utopia'
};

// Changes defaults object...
//Object.assign(defaults, opts);
//console.log(defaults);

// Merging two objects into a new object while keeping the original object intact
const res = Object.assign({}, defaults, opts);

console.log(res);

// Cloning an object
const person = {
    name: 'Bob',
    friends: ['Mark', 'Jacob']
};

const shallowCopy = Object.assign({}, person);
person.friends.push('Jane');

console.log(shallowCopy);