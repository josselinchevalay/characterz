'use strict';

var BaseService = require('./BaseService.js')


var SpellService = function() {
    var spellService = {};
    spellService.__proto__ = BaseService();

    return spellService;
}
