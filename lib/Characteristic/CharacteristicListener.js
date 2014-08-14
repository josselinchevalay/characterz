/**
* Characterictic Listener
*/
var CharactericListener = function(){
    
    this.ValueOnChangeHandler = function(id, oldVal, newVal){
       for(var handler in this.Handlers) {
            this.Handlers[handler](id, oldVal, newVal);
        }
    };

};

CharactericListener.CHANGED_EVENT_ID = "changed";

module.exports = CharactericListener;

