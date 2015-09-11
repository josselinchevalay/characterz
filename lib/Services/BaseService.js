/* global module*/
'use strict';

var BaseService = function(containers) {
    var baseService = {};

    baseService.containers = containers|| {};

    baseService.setContainers = function(name, obj) {
        this.containers[name] = obj;
    };

    baseService.get = function(name) {
        return this.containers[name] || {};
    };

    return baseService;
};


module.exports = BaseService;