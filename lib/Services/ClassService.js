'use strict';


var BaseService = require('./BaseService.js')
var Warrior     = require('../Class/Warrior.js')

var ClassService = function() {
    var classService = {};
    classService.__proto__ = BaseService({
        "Warrior": new Warrior()
    });

    return classService;
};

module.exports = ClassService;