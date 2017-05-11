// var exec = require('cordova/exec');

// exports.coolMethod = function(arg0, success, error) {
//     exec(success, error, "hello", "coolMethod", [arg0]);
// };

var hello = function() {};   

hello.prototype.alert = function() {  
    alert("hello");  
};  

var hello = new hello();  
module.exports = hello;