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

    /*if((!isTorDClicked) || (!listCompleted)) {*/
        do {
            if(obj[i].quantity != 0) {
                newText1.innerHTML += " " + obj[i].name + " (x" + obj[i].quantity + ")," ;
            }
            i += 1 ;
        } while(i < tot) ;
        listCompleted = true ;
    //}

    var newText2 = document.getElementById("displayTotal") ;
    newText2.innerHTML = "Total: $" + sessionStorage.getItem("curTotal") + ".00" ;
    console.log(tot) ;
}

function setTorD() {
    isTorDClicked = true ;
}

function filter() {
    var specCheck = document.getElementById("specialItemCheck") ;
    var milkCheck = document.getElementById("milkTeaCheck") ;
    var regCheck = document.getElementById("regTeaCheck") ;

    var specEle = document.getElementById("specialItems") ;
    var milkEle = document.getElementById("milkTeas") ;
    var regEle = document.getElementById("regTeas") ;

    var p1 = "" ;
    var p2 = "" ;
    var p3 = "" ;

    if(specCheck.checked) {
        p1 = "1" ;
    } else {
        p1 = "0" ;
    }

    if(milkCheck.checked) {
        p2 = "1" ;
    } else {
        p2 = "0" ;
    }

    if(regCheck.checked) {
        p3 = "1" ;
    } else {
        p3 = "0" ;
    }

    var pCombo = p1.concat(p2, p3) ;
    console.log(pCombo) ;

    switch (pCombo) {
        case '000':
            document.getElementById("specialItemsTitle").style.display = "flex" ;
            specEle.style.display = "flex" ;
            document.getElementById("milkTeaItemsTitle").style.display = "flex" ;
            milkEle.style.display = "flex" ;
            document.getElementById("regTeasTitle").style.display = "flex" ;
            regEle.style.display = "flex" ;
            break ;
        
        case '001':
            document.getElementById("specialItemsTitle").style.display = "flex" ;
            specEle.style.display = "flex" ;
            document.getElementById("milkTeaItemsTitle").style.display = "flex" ;
            milkEle.style.display = "flex" ;
            document.getElementById("regTeasTitle").style.display = "flex" ;
            regEle.style.display = "flex" ;

            document.getElementById("specialItemsTitle").style.display = "none" ;
            specEle.style.display = "none" ;
            document.getElementById("milkTeaItemsTitle").style.display = "none" ;
            milkEle.style.display = "none" ;
            break ;
        
        case '011':
            document.getElementById("specialItemsTitle").style.display = "flex" ;
            specEle.style.display = "flex" ;
            document.getElementById("milkTeaItemsTitle").style.display = "flex" ;
            milkEle.style.display = "flex" ;
            document.getElementById("regTeasTitle").style.display = "flex" ;
            regEle.style.display = "flex" ;

            document.getElementById("specialItemsTitle").style.display = "none" ;
            specEle.style.display = "none" ;
            break ;
        
        case '010':
            document.getElementById("specialItemsTitle").style.display = "flex" ;
            specEle.style.display = "flex" ;
            document.getElementById("milkTeaItemsTitle").style.display = "flex" ;
            milkEle.style.display = "flex" ;
            document.getElementById("regTeasTitle").style.display = "flex" ;
            regEle.style.display = "flex" ;

            document.getElementById("specialItemsTitle").style.display = "none" ;
            specEle.style.display = "none" ;
            document.getElementById("regTeasTitle").style.display = "none" ;
            regEle.style.display = "none" ;
            break ;
        
        case '100':
            document.getElementById("specialItemsTitle").style.display = "flex" ;
            specEle.style.display = "flex" ;
            document.getElementById("milkTeaItemsTitle").style.display = "flex" ;
            milkEle.style.display = "flex" ;
            document.getElementById("regTeasTitle").style.display = "flex" ;
            regEle.style.display = "flex" ;

            document.getElementById("milkTeaItemsTitle").style.display = "none" ;
            milkEle.style.display = "none" ;
            document.getElementById("regTeasTitle").style.display = "none" ;
            regEle.style.display = "none" ;
            break ;

        case '101':
            document.getElementById("specialItemsTitle").style.display = "flex" ;
            specEle.style.display = "flex" ;
            document.getElementById("milkTeaItemsTitle").style.display = "flex" ;
            milkEle.style.display = "flex" ;
            document.getElementById("regTeasTitle").style.display = "flex" ;
            regEle.style.display = "flex" ;

            document.getElementById("milkTeaItemsTitle").style.display = "none" ;
            milkEle.style.display = "none" ;
            break ;

        case '110':
            document.getElementById("specialItemsTitle").style.display = "flex" ;
            specEle.style.display = "flex" ;
            document.getElementById("milkTeaItemsTitle").style.display = "flex" ;
            milkEle.style.display = "flex" ;
            document.getElementById("regTeasTitle").style.display = "flex" ;
            regEle.style.display = "flex" ;

            document.getElementById("regTeasTitle").style.display = "none" ;
            regEle.style.display = "none" ;
            break ;

        case '111':
            document.getElementById("specialItemsTitle").style.display = "flex" ;
            specEle.style.display = "flex" ;
            document.getElementById("milkTeaItemsTitle").style.display = "flex" ;
            milkEle.style.display = "flex" ;
            document.getElementById("regTeasTitle").style.display = "flex" ;
            regEle.style.display = "flex" ;
            break ;
    }
}
