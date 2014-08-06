/**
* Characteristic class
*/
var Characteristic = function(attribute, value) {
    this.Attribute = attribute;
    this.Value = value; 
    this.handlers = {};
};



Character.prototype.addHandler = function(characteristic, handler) {
    if (!this.handlers[characteristic]) {
        this.handlers[characteristic] = [];
    }
    this.handlers[characteristic].push(handler);
};


/**
* ValueChanged Method
* @param other $old old value
* @param other $new  new value
*/
//Characteristic.prototype.valueOnChanged = function(prop, handler){};

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
        console.log(this);
        
    }, 
    enumerable: true,
    configurable: true
});

//Object.prototype.watch("Value", this.valueOnChanged);


module.exports = Characteristic;