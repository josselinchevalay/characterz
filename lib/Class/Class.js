/**
* Class class
*/
var Class = function (name){
    var self = this;

    this.Name = name;
}

Class.prototype._name = "";

Object.defineProperty(Class, "Name", {
    get: function(){return this._name},
    set: function(value){
        this._name = value;
    },
    enumerable: true,
    configurable: true
});

module.exports=Class;