/**
* Unit testing
*/
var Character = require("../lib/Character/Character.js");

var Attribute = require("../lib/Attribute/Attribute.js");

var Class = require("../lib/Attribute/Attribute.js");

var Effect = require("../lib/Effect/Effect.js");

var Characteristics = require("../lib/Characteristics/Characteristics.js");

var CharacteristicsListener = require("../lib/Characteristics/CharacteristicsListener.js");

var Characteristic = require("../lib/Characteristic/Characteristic.js");

var CharactericListener = require("../lib/Characteristic/CharacteristicListener.js");

var Util = require("../lib/Util/Util.js");

exports.testCharacter = function(test){
    var c = new Character("test");
    test.ok(c.Name === "test", "Name should be defined");
    test.done();
};
