/**
* Attribute class
*/
var Attribute = function(name, description){
    var _description = description;
    var _name = name;

    Object.defineProperty(this, "Name", {
        get: function(){return _name},
        set: function(value){
            _name = value;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(this, "Description", {
        get: function(){return _description},
        set: function(value){
            _description = value;
        },
        enumerable: true,
        configurable: true
    });
    
};

module.exports = Attribute;