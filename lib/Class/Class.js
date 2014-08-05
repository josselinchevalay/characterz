/**
* Class class
*/
function Class(name){
    var self = this;

    this.name = name;
}

Class.prototype.getName = function() {
    return this.name;
};

Class.prototype.setName = function(name) {
    this.name = name;
    return this;
};

module.exports.Class = Class;