/**
* Character class
*/
var Character = function (name){
    var self = this;

    this.Name = name;
    this.Attributes = new Array();
}


Object.defineProperty(Character, "Name", {
    get: function(){return this._name},
    set: function(value){
        this._name = value;
    },
    enumerable: true,
    configurable: true
});

Object.defineProperty(Character, "Attributes", {
    get: function(){return this._attributes},
    set: function(value){
        this._attributes = value;
    },
    enumerable: true,
    configurable: true
});

module.exports = Character;