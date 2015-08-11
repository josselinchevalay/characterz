/* jshint undef : true */
'use strict';
/**
* Util class
*/
/*global  module, require */
var _ = require('underscore');

var Util = function(){
    
};

/**
* des 
* permet de lancer des dès
* @params int   number  max que le des represente
*/
Util.des = function(number){
    return Math.floor( Math.random() * number);
};

/**
* isSucess
* permet de tester une compétence
* @params   int     value       represente le résultat obtenu sur le des
* @params   int     comparator  repésente la valeur de la compétence
* 
* @result   int      0 = sucessFull -999 = Epic fail sinon > 0 = Win < 0 Fail et le chiffre retourn
* é représente la diff en les deux test
*/
Util.isSucess = function(value, comparator){
    var diff = 0;
    if(value == 0 || value == 1)
      diff = 0 // successfull
    
    if(value == 99 || value == 100)
        diff = -999; // epic fail

    diff = comparator - value;

    return diff;
};

/**
* Modifier
* valeur qui représente la difficulté d'un test à ajouter 
* dans toutes les équation comme ci-dessous
* saut = des(100) + Util.MODIFIER.CASUAL;
*/
Util.MODIFIER = {
    "VERY_HARD" : 30,
    "HARD"      : 20,
    "CASUAL"    : 0,
    "EASY"      : -20,
    "VERY_EASY" : -30,
};


module.exports = Util;