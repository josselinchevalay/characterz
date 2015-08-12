'use strict';

var Charism         = require('../Capacity/Charism.js')
var Commerage       = require('../Capacity/Commerage.js')
var Esquive       = require('../Capacity/Esquive.js')

var Service ={};

Service.Containers = {
    "Charism": new Charism(),
    "Esquive": new Esquive(),
    "Commerage": new Commerage()
};

Service.get = function(name){
    return this.Containers[name];
};

module.exports = Service;