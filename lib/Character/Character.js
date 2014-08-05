/**
* Character class
*/
function Character(name){
    var self = this;

    this.name = name;
}

Character.prototype.getName = function() {
    return this.name;
};

Character.prototype.setName = function(name) {
    this.name = name;
    return this;
};


module.exports.Character = Character;