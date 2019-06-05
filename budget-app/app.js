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
    
    //DOMString
    DOMStrings = {
        type: '.add__type',
        description: '.add__description',
        value:'.add__value',
        addBtn:'.add__btn'
    }
    
    
    return {
        getInput : function() {
            return {
                type: document.querySelector(DOMStrings.type).value,
                desctription: document.querySelector(DOMStrings.description).value,
                value: document.querySelector(DOMStrings.value).value
            }
        },
        getDomString: function() {
            return DOMStrings;
        }
    }
}
)();


var controller = (function(budgetCtrl, uiCtrl) {
    // controller code
    
    // assigning domstring from uiController
    var DOMString = uiCtrl.getDomString();
    
    // add data
    function addData() {
        // read ui element
        var input = uiCtrl.getInput();
        console.log('type :' + input.type);
        console.log('desc :' + input.desctription);
        console.log('value :' + input.value);
    }
    
    document.querySelector(DOMString.addBtn).addEventListener('click', function() {
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