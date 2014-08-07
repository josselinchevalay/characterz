/**
* Characteristic class
*/
var Characteristic = function(attribute, value) {
    var _attribute = attribute;
    var _value = value; 

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
        }, 
        enumerable: true,
        configurable: true
    });
    
};


module.exports = Characteristic;