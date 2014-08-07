/**
* Character class
*/
var Characteristics = require("../Characteristics/Characteristics.js");

var Character = function (name){
    var self = this;

    var _name = name;
    var _characteristics = new Characteristics();


    Object.defineProperty(this, "Name", {
        get: function(){return _name},
        set: function(value){
            _name = value;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(this, "Characteristics", {
        get: function(){return _characteristics},
        set: function(value){
            _characteristics = value;
        },
        enumerable: true,
        configurable: true
    });

}

module.exports = Character;