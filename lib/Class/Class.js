/**
* Class class
*/
var Class = function (name, attributes) {
    var _name = name;
    this._attributes = typeof attributes !== 'undefined' ? attributes : [];

    /**
    * Define Name
    */
    Object.defineProperty(this, "Name", {
        get: function(){return _name},
        set: function(value){
            _name = value;
        },
        enumerable: true,
        configurable: true
    });

    /**
    * Define Attributes
    */
    Object.defineProperty(this, "Attributes", {
        get: function(){return this._attributes},
        set: function(){},
        configurable: false,
        enumerable: true
    });
}

/**
* addAtributes
* @param    attribute   Object  represent a attribute
*/
Class.prototype.addAttribute = function(attribute) {
    this._attributes.push(attribute);
};

module.exports=Class;