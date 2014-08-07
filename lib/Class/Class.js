/**
* Class class
*/
var Class = function (name){
    var _name = name

    Object.defineProperty(this, "Name", {
        get: function(){return _name},
        set: function(value){
            _name = value;
        },
        enumerable: true,
        configurable: true
    });
}

module.exports=Class;