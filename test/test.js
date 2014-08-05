/**
* Unit testing
*/
var Character = require("../lib/Character/Character.js");

exports.testCharacter = function(test){
    var c = new Character("test");
    if (c.getName()=== "test") {
        test.ok(true, "yes");
    } else{
        test.ok(false, "no");
    }

    test.done();
};