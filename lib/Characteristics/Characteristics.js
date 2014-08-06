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



module.exports = Characteristics;