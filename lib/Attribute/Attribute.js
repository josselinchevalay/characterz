/**
* Attribute class
*/
var Attribute = function(name, description){
    var self = this;

    this.description = description;
    this.name = name;
}

Attribute.prototype.getName = function() {
    return this.name;
};

Attribute.prototype.setName = function(name) {
    this.name = name;
    return this;
};

Attribute.prototype.getDescription = function() {
    return this.description;
};

Attribute.prototype.setDescription = function(description) {
    this.description = description;
    return this;
};


module.exports= Attribute;