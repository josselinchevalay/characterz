/**
* Characteristic class
*/
var util = require("util");
var Emmitter = require("events").EventEmitter;

var Characteristic = function(attribute, value) {
    var _attribute = attribute;
    var _value = value; 
    var _handlers = [];

    this.init();

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
            _value = value; 
            this.emit("ValueOnChange");      
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
            this.init();
        }
    });
    
};

util.inherits(Characteristic, Emmitter);

Characteristic.prototype.ValueOnChange = function(id, oldVal, newVal){
    console.log("id : "+id);
};


Characteristic.prototype.init = function(){
    this.on("ValueOnChange", this.ValueOnChange);
};



module.exports = Characteristic;