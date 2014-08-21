/**
* Charateristics class
*/
var util = require("util");
var Emmitter = require("events").EventEmitter;
var CharateristicListener = require("../Characteristic/CharacteristicListener.js");


var Characteristics = function() {
    var _characteristics = [];
    var _handlers = {};

    

    Emmitter.call(this);


    Object.defineProperty(this, "Properties", {
        get: function(){return _characteristics;},
        set: function(value){
            _characteristics = value;
            if(value) {
                this.init();
            }
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(this, "Handlers", {
        get: function(){return _handlers;},
        set: function(value){
            _handlers = value;
        },
        enumerable:true,
        configurable: true
    });

};

util.inherits(Characteristics, Emmitter);


Characteristics.prototype.init = function() {
    for(var key in this.Properties) {
        var listener = new CharateristicListener(this.Properties[key]);
        //this.Properties[key].addHandler(/**Regarder les pipes***/);
        this.Properties[key].on(listener.CHANGED_EVENT_ID, listener.ValueOnChangeHandler);
        this.on(listener.CHANGED_EVENT_ID+":"+this.Properties[key].Name, function(){console.log("yop");});
    }
};


module.exports = Characteristics;