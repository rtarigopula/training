//var add = require('./calculator.js');

var {add, sub} = require('./calculator.js');
var Person = require('./person.js');
var DateCalculator = require('date-calculator');
var States = require('./states.json');

console.log('Hello World!!!');

// var person = new Object();
// person.name = "Rajesh";
// person.occ = "SE";

// console.log(person.name + " " + person.occ);

console.log(" Addition of 10, 20  is " + add(10,20));
console.log(" Addition of 10, 20  is " + sub(10,20));

var student1 = new Person('Rajesh', 35);
var student2 = new Person('Sai', 21);

console.log('Student 1 : ' + student1.name);

var arr = [20, 30, 40, 50];

var filtered = arr.filter(function(x) {
    return x > 30;
});

var arr2 = arr.map(function(x) {
    return x*2;
});

arr2 = arr.map( x => x*2);
//var COUNTRIES = ['India', 'USA', 'Australia'];


//COUNTRIES.map((country, index) => <option key={index}>{country}</option>)

var obj = [{name: 'Rajesh', age:35},{name: 'sai', age: 21}];
var obj1 = obj.map(function(o) {
    return {
        name : o.name.toUpperCase() + '',
        age: o.age + 5 + ''
    };
});

console.log(filtered);

console.log(arr2);
console.log(obj);
console.log(obj1);
var dc = new DateCalculator(new Date(2018,7,9));
console.log(dc.sub(new Date(2018,7,3)));
console.log(States);
/*
^2.5.0 = any stable version which is greater than or equal to this in MAJOR version.
2.5.3, 2.6.0, 2.7.0, 2.7.1

~2.5.0 = any stable version which is greater than or equal to this in MINER version.
2.5.1, 2.5.7, 2.6.1

>2.5.0
>=2.5.0
<2.5.0
<=2.5.0

2.5.0 - 3.5.0

*/

var myobject = {
    z: 4,
    add: function  () {
        return this.z;
    }
}

var additon = myobject.add.bind(myobject);

console.log("Additon of 5, 6 = " + additon());


