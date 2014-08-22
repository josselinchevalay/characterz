/**
* Charateristics class
*/
var util = require("util");
var Emmitter = require("events").EventEmitter;
var CharateristicListener = require("../Characteristic/CharacteristicListener.js");
var CharateristicsListener = require("../Characteristics/CharacteristicsListener.js");

var Characteristics = function() {
    var _characteristics = [];
    var _handlers = {};
    var self = this;
    

    Emmitter.call(this);


    Object.defineProperty(this, "Properties", {
        get: function(){return _characteristics;},
        set: function(value){
            _characteristics = value;
            if(value) {
                this.init();
            }
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


Characteristics.prototype.init = function() {
    for(var key in this.Properties) {
        var characteristiclistener = new CharateristicListener(this.Properties[key]);
        var characteristicsListener = new CharateristicsListener(this.Properties[key].Name);
        this.Properties[key].on(characteristiclistener.CHANGED_EVENT_ID, characteristiclistener.ValueOnChangeHandler);
        this.Properties[key].on(characteristicsListener.CHANGED_EVENT_ID, function(){console.log("yop");});
    }
};

Characteristics.prototype.defineProperty = function(name, settable, enumerable, def) {

    Object.defineProperty(this, name, {
        get: function(){return propertie; },
        set: function(after){
            
        },
        enumerable: enumerable,
        writable: settable,
        value: def
    });
};


module.exports = Characteristics;