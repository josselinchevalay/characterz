/**
* Character class
*/
var Character = function (name){
    var self = this;

    this.Name = name;
    this.Characteristics = [];
    this.handlers = {};
}


Object.defineProperty(Character, "Name", {
    get: function(){return this._name},
    set: function(value){
        this._name = value;
    },
    enumerable: true,
    configurable: true
});

Object.defineProperty(Character, "Characteristics", {
    get: function(){return this._characteristics},
    set: function(value){
        this._characteristics = value;
        if()
    },
    enumerable: true,
    configurable: true
});

module.exports = Character;