/**
* Unit testing
*/
var Character = require("../lib/Character/Character.js");

var Attribute = require("../lib/Attribute/Attribute.js");

var Class = require("../lib/Attribute/Attribute.js");

exports.testCharacter = function(test){
    var c = new Character("test");
    if (c.getName()=== "test") {
        test.ok(true, "yes");
    } else {
        test.ok(false, "no");
    }

    test.done();
};

exports.testAttribute = function(test){
    var a = new Attribute("life", "no die :p ");
    if (a.getName() === "life") {
        test.ok(true, "Attribute can instantiate and getName");
    } else {
        test.ok(false, "Attribute can't instantiate and getName");
    }

    test.done();
};

exports.testClass = function(test){
    var c = new Class("life");
    if (c.getName() === "life") {
        test.ok(true, "Attribute can instantiate and getName");
    } else {
        test.ok(false, "Attribute can't instantiate and getName");
    }

    test.done();
};