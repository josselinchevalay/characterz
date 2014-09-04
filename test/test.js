/**
* Unit testing
*/
var Character = require("../lib/Character/Character.js");

var Attribute = require("../lib/Attribute/Attribute.js");

var Class = require("../lib/Class/Class.js");

var Effect = require("../lib/Effect/Effect.js");

var Util = require("../lib/Util/Util.js");

exports.testCharacter = function(test){
    var c = new Character("Josselin");
    test.ok(c.Name === "Josselin", "Name should be defined");
    test.done();
};

exports.testCharacterAttributeChange = function(test) {
    var c = new Character("Josselin");
    c.on("change:Name", function(){console.log(arguments);});
    c.Name = "josselin";
    test.ok(c.Name==="josselin", "Name should be defined");
    test.done();
};

exports.testCharacterAttributeChangeMultipleHandlers = function(test) {
    var c = new Character("Josselin");
    c.on("change:Name", function(){console.log(arguments);});
    c.on("change:Name", function(){console.log("Multiple !!!")});
    c.Name = "josselin";
    test.ok(c.Name==="josselin", "Name should be defined");
    test.done();
};


exports.testCharacterAttributeChangeHandlersSeparate = function(test) {
    var c = new Character("Josselin");
    c.on("change:Name", function(){console.log(arguments);});
    c.on("change:Name", function(){console.log("Multiple !!!")});
    c.on("change", function(){console.log("change : %s", arguments)});
    c.Name = "josselin";
    c.defineProperty("Endu", true, true, 25);
    test.ok(c.Name==="josselin", "Name should be defined");
    test.done();
};

exports.testAttribute = function(test){
    var a = new Attribute("Endu", "plus de vie", 25);
    test.ok(a.Value === 25, "attribute should value");
    test.done();
};

exports.testEffect = function(test){
    var e = new Effect();
    var c = new Character("toto");
    var life = new Attribute("Life", "no die", 120);
    c.defineProperty(life.Name, true, true, life.Value);
    e.decrease(c, life, 10);
    test.ok(c.Life === 110, "should be 110");
    test.done();
};


exports.testEffectWithObject = function(test){
    var e = new Effect();
    var c = new Character("toto");
    var life = new Attribute("Life", "no die", 120);
    c.defineProperty(life.Name, true, true, life);
    e.decrease(c, life, 10);
    test.ok(c.Life.Value === 110, "should be 110");
    test.done();
};

exports.testClassAddAttribute = function(test){
    var c = new Class("warrior", []);
    c.addAttribute(new Attribute("Life", "no die", 225));
    test.ok(c.Attributes.length === 1, "should be 1 ");
    test.done();
};

exports.testCreateCharacter = function(test){
    var c = new Character("Joss");
    var cl = new Class("warrior", []);
    var util = new Util();
    cl.addAttribute(new Attribute("Life", "no die ", 125));
    cl.addAttribute(new Attribute("Endu", "increase life", 75));
    c = util.CreateCharacter(c, cl);
    test.ok(c.Life.Value === 125, "should be 125");
    test.done();
};


exports.testbiteCharacter = function(test){
    var c = new Character("Joss");
    var cl = new Class("warrior", []);
    var util = new Util();
    var effect = new Effect();
    cl.addAttribute(new Attribute("Life", "no die ", 125));
    cl.addAttribute(new Attribute("Endu", "increase life", 75));
    c = util.CreateCharacter(c, cl);
    c.on("change:Life", function(){console.log("outch i am bitten ");});
    c.on("change:Endu", function(){console.log("endu")});
    effect.decrease(c, "Life", 10);
    test.ok(c.Life.Value === 115, "should be 115");
    test.done();
};
