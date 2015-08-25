'use strict';

var BaseService = require('./BaseService.js')

var FireBall = require('../Spell/FireBall.js')

var SpellService = function() {
    var spellService = {};
    spellService.__proto__ = BaseService({
        "FireBall": new FireBall()
    });

    return spellService;
}

module.exports = SpellService;