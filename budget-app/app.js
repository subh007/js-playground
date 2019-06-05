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
    
    console.log(document.querySelector('.add__description'));
    
    
    return {
        getInput : function() {
            return {
                type: document.querySelector('.add__type').value,
                desctription: document.querySelector('.add__description').value,
                value: document.querySelector('.add__value').value
            }
        }
    }
}
)();


var controller = (function(budgetCtrl, uiCtrl) {
    // controller code
    
    // add data
    function addData() {
        // read ui element
        var input = uiCtrl.getInput();
        console.log('type :' + input.type);
        console.log('desc :' + input.desctription);
        console.log('value :' + input.value);
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