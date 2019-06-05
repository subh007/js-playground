// example for iife (to obtain data privacy)
var budgetController = (function() {
    var Expense = function(id, desc, value) {
        this.id = id;
        this.desc = desc;
        this.value = value;
    };

    var Income = function(id, desc, value) {
        this.id = id;
        this.desc = desc;
        this.value = value;
    };
    
    var data = {
        items: {
            income: [],
            expense: []
        },
        totals: {
            expense: 0.0,
            income: 0.0
        }
    };
})();


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
    
    var setupApp = function() {
        // assigning domstring from uiController
        var DOMString = uiCtrl.getDomString();
        
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
    }
    
    // add data
    function addData() {
        // read ui element
        var input = uiCtrl.getInput();
        console.log('type :' + input.type);
        console.log('desc :' + input.desctription);
        console.log('value :' + input.value);
    }
    
    return {
        init: function() {
            console.log('application started');
            setupApp();
        }
    }
})(budgetController, UIController); 

controller.init();