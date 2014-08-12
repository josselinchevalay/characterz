/**
* Charateristics class
*/
var util = require("util");
var Emmitter = require("events").EventEmitter;

var Characteristics = function() {
    var _characteristics = [];
    var _handlers = {};

    Object.defineProperty(this, "Properties", {
        get: function(){return _characteristics;},
        set: function(value){
            _characteristics = value;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(this, "Handlers", {
        get: function(){return _handlers;},
        set: function(value){
            _handlers = value;
        },
        enumerable:true,
        configurable: true
    });

};

util.inherits(Characteristics, Emmitter);



module.exports = Characteristics;