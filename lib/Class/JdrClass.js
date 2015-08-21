'use strcit';
/**
*
*/
var BaseClass = require('./BaseClass.js')


var JdrClass = function(){

    var jdrClass = {};
    jdrClass.__proto__ = BaseClass();

    // assign all spells of class for all level
    jdrClass.grimmoire = {};
    
    jdrClass.affectTo = function(character){
        
    };

    jdrClass.levelUp = function(character){
        
    }

    return jdrClass;
};


module.exports = JdrClass;