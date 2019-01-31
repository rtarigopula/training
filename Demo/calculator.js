
module.exports.add = function(a, b) {
    writeLine( a + "+" + b + "=" + (a+b) );
    return a + b;
};

module.exports.sub = function(a, b) {
    return a - b;
}

module.exports.mul = (a,b) => a * b;
module.exports.div = (a,b) => {
    return a/b;
}

var writeLine = (txt) => console.log(txt);


