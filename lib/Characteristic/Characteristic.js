/**
* Characteristic class
*/
var util = require("util");
var Emmitter = require("eventEmitter3").EventEmitter;
var Listener = require("./CharacteristicListener.js");

var Characteristic = function(attribute, value) {
    var _attribute = attribute;
    var _value = value; 
    var _handlers = [];
    var _listener = new Listener();

    this.init();

    Emmitter.call(this);

    
    /**
    * Propertie Attribute
    */
    Object.defineProperty(this, "Attribute", {
        get: function(){return _attribute; },
        set: function(value){
            _attribute = value;
        }, 
        enumerable: true,
        configurable: true
    });


    /**
    * Propertie Value
    */
    Object.defineProperty(this, "Value", {
        get: function(){return _value; },
        set: function(value){
            var oldval = _value;
            _value = value; 
            this.emit( _listener.CHANGED_EVENT_ID, _attribute.Name, oldval, _value);      
        }, 
        enumerable: true,
        configurable: true
    });

    /**
    * Propertie Handlers
    */
    Object.defineProperty(this, "Handlers", {
        get: function(){return _handlers; },
        set: function(value){
            _handlers = value;
        }
    });
    
};

util.inherits(Characteristic, Emmitter);

Characteristic.prototype.ValueOnChange = function(id, oldVal, newVal){
    for(var handler in this.Handlers) {
        this.Handlers[handler](id, oldVal, newVal);
    }
};


Characteristic.prototype.init = function(){
    var _listener = new Listener();
    this.on( _listener.CHANGED_EVENT_ID, this.ValueOnChange);
};

Characteristic.prototype.addHandler = function(fn) {
    var handlers = this.Handlers;
    handlers.push(fn);
    this.Handlers = handlers;
};

module.exports = Characteristic;