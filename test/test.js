/**
* Unit testing
*/
//var Character = require("../lib/Character/Character.js");

//var Attribute = require("../lib/Attribute/Attribute.js");

var BaseAttribute = require("../lib/Attribute/BaseAttribute.js");

var RawBonus = require("../lib/Attribute/RawBonus.js");

var FinalBonus = require("../lib/Attribute/FinalBonus.js");

var Attribute = require("../lib/Attribute/Attribute.js");

var DependantAttribute = require("../lib/Attribute/DependantAttribute.js");

var BaseSpell = require("../lib/Spell/BaseSpell.js");

var CharacterJDR = require("../lib/Character/CharacterJDR.js");

var Human = require("../lib/Race/Human.js")

var Elfe = require("../lib/Race/Elfe.js")

var Halfing = require('../lib/Race/Halfing.js')

var Nain = require('../lib/Race/Nain.js')

var Agitator = require('../lib/Career/Agitator.js')

var Lootr = require('lootr')

//var Class = require("../lib/Class/Class.js");

//var Effect = require("../lib/Effect/Effect.js");

//var Util = require("../lib/Util/Util.js");

//var Spell = require("../lib/Spell/Spell.js");

exports.testBaseAttribute = function(test){
    var b = new BaseAttribute(10, 0.0);
    test.ok(b.BaseValue == 10, "Base value should 10");
    test.done();
}

exports.testRawBonus = function(test){
    var b = new RawBonus(10, 0.0);
    test.ok(b.BaseValue == 10, "Base value should 10");
    test.done();
}

exports.testFinaleBonus = function(test){
    var b = new FinalBonus(10, 0.0);
    test.ok(b.BaseValue == 10, "Base value should 10");
    test.done();
}

exports.testFinaleBonus = function(test){
    var attribue = new Attribute(10);
    test.ok(attribue.FinalValue() == 10, "Base value should 10");
    test.done();
}

exports.testAttributeWithRawBonus = function(test){
    var attribue = new Attribute(10);
    var rawBonus = new RawBonus(2, 0.5);
    attribue.addRawBonuses(rawBonus);
    test.ok(attribue.FinalValue() == 13, "Base value should 13");
    test.done();
}

exports.testAttributeWithFinalBonus = function(test){
    var attribue = new Attribute(10);
    var finalBonus = new FinalBonus(2, 0.5, 10*60);
    attribue.addFinalBonuses(finalBonus);
    test.ok(attribue.FinalValue() == 13, "Base value should 13");
    test.done();
}

exports.testAttributeWithFinalBonus = function(test){
    var attribue = new Attribute(10);
    var finalBonus = new FinalBonus(2, 0.5, 10*60);
    finalBonus.startTimer(attribue);
    test.expect(1);
    setTimeout(function(){
        test.ok(attribue.FinalValue() == 10, "Base value should 10"); 
        test.done();       
    }, 12 * 60);    
}

exports.testDependantAttribute = function(test){
    var att = new DependantAttribute(10);
    test.ok(att.FinalValue() == 10, "Base value should 10");
    test.done();
}

exports.testBaseSpell = function(test){
    var spell = new BaseSpell();
    spell.start({}, {});
    test.ok(1 == 1, "");
    test.done();
};

exports.testCreateHumanCharacter = function(test){
    var humanRace = new Human();
    var perso = new CharacterJDR("joss", "chevalay");
    humanRace.affectTo(perso);
    perso.display();
    test.ok(perso.FirstName == "joss", "Name should joss");
    test.done();
};


exports.testCreateElfeCharacter = function(test){
    var elfeRace = new Elfe();
    var perso = new CharacterJDR("sam", "chevalay");
    elfeRace.affectTo(perso);
    perso.display();
    test.ok(perso.FirstName == "sam", "Name should joss");
    test.done();
};


exports.testCreateHalfingCharacter = function(test){
    var halgingRace = new Halfing();
    var perso = new CharacterJDR("thibaut", "chevalay");
    halgingRace.affectTo(perso);
    perso.display();
    test.ok(perso.FirstName == "thibaut", "Name should joss");
    test.done();
};

exports.testCreateNainCharacter = function(test){
    var nainRace = new Nain();
    var perso = new CharacterJDR("mathieu", "chevalay");
    nainRace.affectTo(perso);
    perso.display();
    test.ok(perso.FirstName == "mathieu", "Name should joss");
    test.done();
};


exports.testAgitator = function(test) {
    var humanRace = new Human();
    var agitator  = new Agitator();
    var perso = new CharacterJDR("joss", "chevalay");
    humanRace.affectTo(perso);
    agitator.affectTo(perso);
    perso.display();
    test.ok(perso.FirstName == "joss", "Name should joss");
    test.done();
};
