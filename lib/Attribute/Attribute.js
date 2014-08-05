/**
* Attribute class
*/
var Attribute = function(name, description){
    var self = this;

    this.Description = description;
    this.Name = name;
    this.Value = 0;
}



Object.defineProperty(Attribute, "Name", {
    get: function(){return this._name},
    set: function(value){
        this._name = value;
    },
    enumerable: true,
    configurable: true
});

Object.defineProperty(Attribute, "Description", {
    get: function(){return this._description},
    set: function(value){
        this._description = value;
    },
    enumerable: true,
    configurable: true
});

Object.defineProperty(Attribute, "Value", {
    get: function(){return this._value},
    set: function(value){
        this._value = value;
    },
    enumerable: true,
    configurable: true
});


module.exports = Attribute;