/**
* Unit testing
*/
var Character = require("../lib/Character/Character.js");

var Attribute = require("../lib/Attribute/Attribute.js");

var Class = require("../lib/Attribute/Attribute.js");

var Effect = require("../lib/Effect/Effect.js");

var Characteristics = require("../lib/Characteristics/Characteristics.js");

var Characteristic = require("../lib/Characteristic/Characteristic.js");

var CharactericListener = require("../lib/Characteristic/CharacteristicListener.js");

var Util = require("../lib/Util/Util.js");

exports.testCharacter = function(test){
    var c = new Character("test");
    test.ok(c.Name === "test", "Name should be defined");
    test.done();
};

exports.testAttribute = function(test){
    var a = new Attribute("life", "no die :p ");
    test.ok(a.Name === "life", "Name should be defined");
    test.done();
};


exports.testClass = function(test){
    var c = new Class("life");
    test.ok(c.Name === "life", "Name should be defined");
    test.done();
};

exports.testEffectIncrease = function(test){

    test.done();
};

exports.testEffectDecrease = function(test){

    test.done();
}

exports.testCharacteristic = function(test) {
    var characteristic = new Characteristic(new Attribute("life", "no die :p"), 25);
    test.ok(characteristic.Value === 25, "Value should be defined");
    test.done();
}


exports.testCharacteristics = function(test) {
    var characteristic = new Characteristic(new Attribute("life", "no die :p"), 25);
    var characteristics = new Characteristics();
    test.done();
};



exports.testCharacteristicOnChange = function(test) {
    var characteristic = new Characteristic(new Attribute("life", "no die :p"), 25);
    var listener = new CharactericListener(characteristic);
    listener.ValueOnChangeHandler = function(id, o, n){console.log("your %s is %s", id, n);};
    characteristic.on("ValueOnChange", listener.ValueOnChangeHandler);
    characteristic.Value = 60;
    test.done();
};

exports.testCharacteristicsOnchanged = function(test){
    var characteristics = new Characteristics();
    var attribute = new Attribute("life", "no die");
    var charac = new Characteristic(attribute, 25);
    var testTab = [charac];
    characteristics.Properties = testTab;

    test.done();
};
