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
Effect.increase = function(person, attribute, value ) {
    person.Attributes[attribute.Name].Value = person.Attributes[attribute.Name].Value + value;
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
Effect.decrease = function(person, attribute, value ) {
    person.Attributes[attribute.Name].Value = person.Attributes[attribute.Name].Value - value;
    return person
};
module.exports = Effect;