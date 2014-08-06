/**
* Charateristics class
*/
var Characteristics = function() {
    this._characteristics = [];
    this._handlers = {};
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

Object.defineProperty(Characteristics, "Properties", {
    get: function(){return this._characteristics;},
    set: function(value){
        console.log("setValue");
    },
    enumerable: true,
    configurable: true
})

module.exports = Characteristics;