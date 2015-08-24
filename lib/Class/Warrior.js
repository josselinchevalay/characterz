'use strict';

var JdrClass = require('./JdrClass.js')

var Warrior = function(){
   var warrior = {};
   warrior.__proto__ = JdrClass();

   warrior.grimmoire = {
    "1" : []
   };


   warrior.affectTo = function(character) {
       character.F  = character.F + 10;
       character.PA = character.PA + 5;
       character.Grimmoire = character.Grimmoire.push(this.grimmoire[1]);
   };

   return warrior;
}

module.exports = Warrior;