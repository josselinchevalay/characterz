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


/*

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


exports.testSpell = function(test){
    var bite = new Spell("bite", "bite you", "Physics");
    test.ok(bite.Name === "bite", "should be bite");
    test.done();
};

exports.testSpellDescription = function(test){
    var bite = new Spell("bite", "bite you", "Physics");
    test.ok(bite.Description === "bite you", "should be bite");
    test.done();
};

exports.testSpellType = function(test){
    var bite = new Spell("bite", "bite you", "Physics");
    test.ok(bite.Type === "Physics", "should be bite");
    test.done();
};
*/

