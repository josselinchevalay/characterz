/**
* Characteristic class
*/
var Characteristic = function(attribute, value) {
    this.Attribute = attribute;
    this.Value = value; 
};

/**
* Propertie Attribute
*/
Object.defineProperty(Characteristic, "Attribute", {
    get: function(){return this._attribute === null ? null : this._attribute; },
    set: function(value){
        this._attribute = value;
    }, 
    enumerable: true,
    configurable: true
});


/**
* Propertie Value
*/
Object.defineProperty(Characteristic, "Value", {
    get: function(){return this._value === null ? null : this._value; },
    set: function(value){
        this._value = value;
    }, 
    enumerable: true,
    configurable: true
});

module.exports = Characteristic;