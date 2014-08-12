/**
* Charateristics class
*/


var Characteristics = function() {
    var _characteristics = [];
    var _handlers = {};

    Object.defineProperty(this, "Properties", {
        get: function(){return _characteristics;},
        set: function(value){
            _characteristics = value;
        },
        enumerable: true,
        configurable: true
    });

};

Characteristics.prototype.addHandler = function(characteristic, handler) {
    if (!this._handlers[characteristic]) {
        this._handlers[characteristic] = [];
    }
    this._handlers[characteristic].push(handler);
};

Characteristics.prototype.addCharacteristic = function(characteristic) {
    this.Properties.push(characteristic);
};



module.exports = Characteristics;