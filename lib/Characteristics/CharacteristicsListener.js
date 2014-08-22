/*
* Characteristics Listener class
*/
var CharacteristicsListener = function(name){
    this.Name = name;
}

CharacteristicsListener.prototype.CHANGED_EVENT_ID = "changed:"+this.Name;

module.exports = CharacteristicsListener;