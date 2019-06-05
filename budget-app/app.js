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
    
    // add data
    function addData() {
        console.log('add data');
    }
    
    document.querySelector('.add__btn').addEventListener('click', function() {
       console.log('button clicked');
       addData();
    });
    
    document.addEventListener('keypress', function(event) {
        if (event.charCode === 13) {
            console.log('enter is pressed');
            addData();
        }
    });
})(budgetController, UIController); 