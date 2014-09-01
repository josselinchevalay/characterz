/**
* Effect class
*/
var Effect = function(){
    
}
/**
* Constant Increase
*/
Effect.INCREASE = "increase";

/**
* Constant Descrease
*/
Effect.DECREASE = "decrease";

/**
* increase method
* @param Character person represent person
* @param Attribute attribute represent attribute at increase
* @param Int value represent value at increase
*
* @return Character
*/
Effect.prototype.increase = function(person, attribute, value ) {
    if (typeof attribute === "object") {
        person[attribute.Name] = person[attribute.Name] + value;
    }else if (typeof attribute === "string") {
        person[attribute] = person[attribute] + value;
    }    
    return person;
};

/**
* decrease method
* @param Character person represent person
* @param Attribute attribute represent attribute at increase
* @param Int value represent value at increase
*
* @return Character
*/
Effect.prototype.decrease = function(person, attribute, value ) {
    if (typeof attribute === "object") {
        person[attribute.Name] = person[attribute.Name]  - value;
    }else if (typeof attribute === "string") {
        person[attribute] = person[attribute] - value;
    }    
    return person;
};
module.exports = Effect;