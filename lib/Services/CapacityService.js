'use strict';

var Charism         = require('../Capacity/Charism.js')
var Commerage       = require('../Capacity/Commerage.js')
var Esquive         = require('../Capacity/Esquive.js')
var Ragot           = require('../Capacity/Ragot.js')

var Service ={};

Service.Containers = {
    "Charism": new Charism(),
    "Esquive": new Esquive(),
    "Commerage": new Commerage(),
    "Ragot": new Ragot()
};

Service.get = function(name) {
    return this.Containers[name];
};

Service.add = function(name, obj) {
    this.Containers[name]  = obj;
} 

module.exports = Service;