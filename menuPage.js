var curTotal = 0 ;
var isTorDClicked = false ;
var listCompleted = false ;
var cart = [] ;
var totalItemsNum = 0 ;

var products = [
    {
        name: "Matcha Tea",
        specialItem: true,
        milkTea: false,
        regTea: false,
        price: 5.00,
        quantity: 0,
    },
    {
        name: "Banana Berry Tea",
        specialItem: true,
        milkTea: false,
        regTea: false,
        price: 5.00,
        quantity: 0,
    },
    {
        name: "Passionfruit Tea",
        specialItem: true,
        milkTea: false,
        regTea: false,
        price: 5.00,
        quantity: 0,
    },
    {
        name: "Strawberry Milk Tea",
        specialItem: false,
        milkTea: true,
        regTea: false,
        price: 4.00,
        quantity: 0,
    },
    {
        name: "Mango Milk Tea",
        specialItem: false,
        milkTea: true,
        regTea: false,
        price: 4.00,
        quantity: 0,
    },
    {
        name: "Berry Blast Milk Tea",
        specialItem: false,
        milkTea: true,
        regTea: false,
        price: 4.00,
        quantity: 0,
    },
    {
        name: "Green Tea",
        specialItem: false,
        milkTea: false,
        regTea: true,
        price: 3.00,
        quantity: 0,
    },
    {
        name: "Orange Pekoe Tea",
        specialItem: false,
        milkTea: false,
        regTea: true,
        price: 3.00,
        quantity: 0,
    },
    {
        name: "Chai Tea",
        specialItem: false,
        milkTea: false,
        regTea: true,
        price: 3.00,
        quantity: 0,
    }
] ;

function fillMatcha(e) {
    products[0].quantity = e ;
}

function fillBananaBerry(e) {
    products[1].quantity = e ;
}

function fillPassionfruit(e) {
    products[2].quantity = e ;
}

function fillStrawberry(e) {
    products[3].quantity = e ;
}

function fillMango(e) {
    products[4].quantity = e ;
}

function fillBerryBlast(e) {
    products[5].quantity = e ;
}

function fillGreen(e) {
    products[6].quantity = e ;
}

function fillOrangePekoe(e) {
    products[7].quantity = e ;
}

function fillChai(e) {
    products[8].quantity = e ;
}

function setTotal() {
    var total = 0 ;
    var isAlreadySelected = false ;

    for(let i = totalItemsNum ; i < products.length ; i += 1) {
        isAlreadySelected = false ;
        if(products[i].quantity > 0) {
            for(let j = 0 ; j < cart.length ; j += 1) {
                if(cart[j].name == products[i].name) {
                    isAlreadySelected = true ;
                }
            }
            if(!isAlreadySelected) {
                cart.push(products[i]) ;
                totalItemsNum += 1 ;
            }
        }
    }
    for(let k = 0 ; k < cart.length ; k += 1) {
        total += (cart[k].price) * (cart[k].quantity) ;
    }    
    curTotal = total ;
    sessionStorage.setItem("curTotal", curTotal.toString()) ;
    sessionStorage.setItem("totalItems", totalItemsNum.toString()) ;
    sessionStorage.setItem("cartArray", JSON.stringify(cart)) ;
    console.log(curTotal) ;
    console.log(totalItemsNum) ;
}

function getTotal() {
    return(curTotal) ;
}

function chosenItems() {

    var i = 0 ;
    var newText1 = document.getElementById("displayItems") ;
    var array = sessionStorage.getItem("cartArray") ;
    var obj = JSON.parse(array) ;
    var tot = sessionStorage.getItem("totalItems") ;
    console.log(array) ;

    if((!isTorDClicked) || (!listCompleted)) {
        do {
            if(obj[i].quantity != 0) {
                newText1.innerHTML += "- " + obj[i].name + " (x" + obj[i].quantity + ")," ;
            }
            i += 1 ;
        } while(i < tot) ;
        listCompleted = true ;
    }

    var newText2 = document.getElementById("displayTotal") ;
    newText2.innerHTML = "Total: $" + sessionStorage.getItem("curTotal") + ".00" ;
    console.log(tot) ;
}

function setTorD() {
    isTorDClicked = true ;
}
