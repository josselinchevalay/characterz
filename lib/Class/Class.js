/**
* Class class
*/
var Class = function (name, attributes) {
    var _name = name;
    this._attributes = typeof attributes !== 'undefined' ? attributes : [];

    Object.defineProperty(this, "Name", {
        get: function(){return _name},
        set: function(value){
            _name = value;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(this, "Attributes", {
        get: function(){return this._attributes},
        set: function(){},
        configurable: false,
        enumerable: true
    });
}

Class.prototype.addAttribute = function(attribute) {
    this._attributes.push(attribute);
};

module.exports=Class;