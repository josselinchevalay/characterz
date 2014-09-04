/**
* Effect class
*/
var Effect = function(){
    
}
/**
* Constant Increase
*/
Effect.prototype.INCREASE = "increase";

/**
* Constant Descrease
*/
Effect.prototype.DECREASE = "decrease";

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
        if (typeof person[attribute.Name] === "object") {
            var temp = person[attribute.Name];
            temp.Value = temp.Value - value;
            person[attribute.Name] = temp;
        } else {
            person[attribute.Name] = person[attribute.Name] + value;
        }       
    }else if (typeof attribute === "string") {
        if (typeof person[attribute] === "object") {
            var temp = person[attribute];
            temp.Value = temp.Value - value;
            person[attribute] = temp;
        } else {
            person[attribute] = person[attribute] + value;
        }  
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
        if (typeof person[attribute.Name] === "object") {
            var temp = person[attribute.Name];
            temp.Value = temp.Value - value;
            person[attribute.Name] = temp;
        } else {
            person[attribute.Name] = person[attribute.Name] - value;
        }

    }else if (typeof attribute === "string") {
        if (typeof person[attribute] === "object") {
            var temp = person[attribute];
            temp.Value = temp.Value - value;
            person[attribute] = temp;
        } else {
            person[attribute] = person[attribute] - value;
        }  
    }    
    return person;
};
module.exports = Effect;