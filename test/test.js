/**
* Unit testing
*/
var Character = require("../lib/Character/Character.js");

var Attribute = require("../lib/Attribute/Attribute.js");

var Class = require("../lib/Attribute/Attribute.js");

var Effect = require("../lib/Effect/Effect.js");

var Util = require("../lib/Util/Util.js");

exports.testCharacter = function(test){
    var c = new Character("Josselin");
    test.ok(c.Name === "Josselin", "Name should be defined");
    test.done();
};

exports.testCharacterAttributeChange = function(test){
    var c = new Character("Josselin");
    c.on("change:Name", function(){console.log(arguments);});
    c.Name = "josselin";
    c.Name = "Josselin";
    test.ok(c.Name==="Josselin", "Name should be defined");
    test.done();
};
