// example for iife (to obtain data privacy)
var budgetController = (function() {
    var x = 20;
    var add = function (y) {
        return x + y;
    }
    
    return {
     publicTest: function(a) {
         console.log(add(a));
     }   
    }
}
)();


var UIController = (function() {
   // ui code 
}
)();


var controller = (function(budgetCtrl, uiCtrl) {
    // controller code
}
)(budgetController, UIController);