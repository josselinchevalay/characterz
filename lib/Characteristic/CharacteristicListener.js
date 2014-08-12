/**
* Characterictic Listener
*/
var CharactericListener = function(){
    
    this.ValueOnChangeHandler = function(id, oldVal, newVal){
        console.log("your %s was %s now is %s", id, oldVal, newVal);
    };

};


module.exports = CharactericListener;