/**
* Spell class
*/
var Spell = function(name, description, type){
    
    var _name = name;
    var _description = description;
    var _cost = []; // define cost for spell
    var _effect = []; // define effect of spell
    var _type = type

    /**
    * Define Name
    */
    Object.defineProperty(this, "Name", {
        get : function(){return _name;},
        set : function(value){_name = value},
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(this, "Description", {
        get : function(){return _description;},
        set : function(value){_description=value},
        enumerable : true,
        configurable : true, 
    });

     Object.defineProperty(this, "Type", {
        get : function(){return _type;},
        set : function(value){_type=value},
        enumerable : true,
        configurable : true, 
    });
};




/**
* DefineProperty
* @param attibute   Attribute   attribute to set
* @param settable   boolean     settable or not
* @param enumerable boolean     enumerable or not
* @param name       String      name of display
* @param value      other       default value
*/
Spell.prototype.defineProperty = function(name, configurable, enumerable, value) {
    var self = this;
    var util = new Util();
    var property = value;
    Object.defineProperty(this, name, {
        get: function(){return property;},
        set: function(value){
            var before = property;
            var after = value;
            var effect = util.effect(before, after);
            property = value;
        },
        configurable: configurable,
        enumerable : enumerable
    });

};
module.exports = Spell;