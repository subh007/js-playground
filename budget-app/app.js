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
            inc: [],
            exp: []
        },
        totals: {
            inc: 0.0,
            exp: 0.0
        }
    };
    
    return {
        addItem: function(type, desc, val) {
            var newItem, ID;
            
            if (data.items[type].length > 0) {
                ID = data.items[type][data.items[type].length - 1].id;
            } else {
                ID = 1;
            }
            
            if (type === 'exp') {
                newItem = new Expense(ID, desc, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, desc, val);
            }
            
            data.items[type].push(newItem);
        },
        testing: function() {
            console.log(data);
        }
    }
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
        
        budgetCtrl.addItem(input.type, input.desctription, input.value);
    }
    
    return {
        init: function() {
            console.log('application started');
            setupApp();
        }
    }
})(budgetController, UIController); 

controller.init();