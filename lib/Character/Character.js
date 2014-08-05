/**
* Character class
*/
var Character = function (name){
    var self = this;

    this.Name = name;
}

Character.prototype._name = "";

Object.defineProperty(Character, "Name", {
    get: function(){return this._name},
    set: function(value){
        this._name = value;
    },
    enumerable: true,
    configurable: true
});


module.exports = Character;