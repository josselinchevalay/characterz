/**
* Character class
*/
var Util = require("../Util/Util.js");
var inherit = require("util");
var EventEmitter = require("EventEmitter3").EventEmitter;

var Character = function (name){
    var self = this;

    
    this.defineProperty("Name", true, true, name);


};

inherit.inherits(Character, EventEmitter);

/**
* DefineProperty
* @param attibute   Attribute   attribute to set
* @param settable   boolean     settable or not
* @param enumerable boolean     enumerable or not
* @param name       String      name of display
* @param value      other       default value
*/
Character.prototype.defineProperty = function(name, configurable, enumerable, value) {
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
            this.emit("change", name, before, after, effect, self);
            this.emit("change:"+name, name, before, after, effect, self);
        },
        configurable: configurable,
        enumerable : enumerable
    });
    this.emit("add:attribute", name, this[name], this);
    this.emit("add:attribute:"+name, name, this[name], this);

};



module.exports = Character;