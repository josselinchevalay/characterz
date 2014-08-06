/**
* Unit testing
*/
var Character = require("../lib/Character/Character.js");

var Attribute = require("../lib/Attribute/Attribute.js");

var Class = require("../lib/Attribute/Attribute.js");

var Effect = require("../lib/Effect/Effect.js");

var Characteristic = require("../lib/Characteristic/Characteristic.js");

exports.testCharacter = function(test){
    var c = new Character("test");
    if (c.Name === "test") {
        test.ok(true, "yes");
    } else {
        test.ok(false, "no");
    }

    test.done();
};

exports.testAttribute = function(test){
    var a = new Attribute("life", "no die :p ");
    if (a.Name === "life") {
        test.ok(true, "Attribute can instantiate and getName");
    } else {
        test.ok(false, "Attribute can't instantiate and getName");
    }

    test.done();
};


exports.testClass = function(test){
    var c = new Class("life");
    if (c.Name === "life") {
        test.ok(true, "Attribute can instantiate and getName");
    } else {
        test.ok(false, "Attribute can't instantiate and getName");
    }

    test.done();
};

exports.testEffectIncrease = function(test){
    /*var person = new Character("test");
    var attribute = new Attribute("life", "no die");
    attribute.Value = 15;
    person.Attributes[attribute.Name] = attribute;
    Effect.increase(person, attribute, 10);
    if (person.Attributes[attribute.Name].Value === 25) {
        test.ok(true, "work");
    }   else {
        test.ok(false, "no work");
    }*/
    test.done();
};

exports.testEffectDecrease = function(test){
    /*var person = new Character("test");
    var attribute = new Attribute("life", "no die");
    attribute.Value = 15;
    person.Attributes[attribute.Name] = attribute;
    Effect.decrease(person, attribute, 10);
    if (person.Attributes[attribute.Name].Value === 5) {
        test.ok(true, "work");
    }   else {
        test.ok(false, "no work");
    }*/
    test.done();
}

exports.testCharacteristic = function(test) {
    var characteristic = new Characteristic(new Attribute("life", "no die :p"), 25);
    if(characteristic.Value === 25) {
        test.ok(true, "Characteristic ok");
    } else {
        test.ok(false, "no ok");
    }

    test.done();
}


exports.testCharacteristicOnChanged = function(test) {
    var characteristic = new Characteristic(new Attribute("life", "no die :p"), 25);
    characteristic.valueOnChanged = function(old, new_value){console.log("old = "+old);};
    Characteristic.Value = 15;
    test.done();
};