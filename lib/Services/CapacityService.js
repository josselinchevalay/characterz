/* global require, module*/
'use strict';

var BaseService     = require('./BaseService.js');
var Charism         = require('../Capacity/Charism.js');
var Commerage       = require('../Capacity/Commerage.js');
var Esquive         = require('../Capacity/Esquive.js');
var Ragot           = require('../Capacity/Ragot.js');

var Service = function() {
    var service = {};
    service.__proto__ = BaseService({
        'Charism': new Charism(),
        'Esquive': new Esquive(),
        'Commerage': new Commerage(),
        'Ragot': new Ragot()
    });

    return service;
};

module.exports = Service;