//today's sale
document.getElementById('add-todays-field').addEventListener('click', function () {
    //create parent div
    let parentDiv = document.createElement('div');
    parentDiv.classList.add('shop');

    //create child div 1
    let childDiv1 = document.createElement('div');
    childDiv1.classList.add('shop-name-wrap');
    let input = document.createElement('input');
    input.classList.add('shop-name');
    input.placeholder = 'Shop Name';
    childDiv1.appendChild(input);

    //create child div 2
    let childDiv2 = document.createElement('div');
    childDiv2.classList.add('product-wrap');
    //product 1
    let product1 = document.createElement('select');
    product1.classList.add('product');
    product1.id = 'coffee';
    let spc = document.createElement('option');
    spc.innerText = 'S.P.C';
    let pc = document.createElement('option');
    pc.innerText = 'P.C';
    let pcc = document.createElement('option');
    pcc.innerText = 'P.C.C';
    let npc = document.createElement('option');
    npc.innerText = 'N.P.C';
    product1.appendChild(spc);
    product1.appendChild(pc);
    product1.appendChild(pcc);
    product1.appendChild(npc);
    //product 2
    let product2 = document.createElement('select');
    product2.classList.add('product');
    product2.id = 'milk-tea';
    let pt = document.createElement('option');
    pt.innerText = 'P.T';
    let rt = document.createElement('option');
    rt.innerText = 'R.T';
    let masala = document.createElement('option');
    masala.innerText = 'Masala.T';
    product2.appendChild(pt);
    product2.appendChild(rt);
    product2.appendChild(masala);
    //product 3
    let product3 = document.createElement('select');
    product3.classList.add('product');
    product3.id = 'red-tea';
    let redT = document.createElement('option');
    redT.innerText = 'Red.T';
    product3.appendChild(redT);
    //product 4
    let product4 = document.createElement('select');
    product4.classList.add('product');
    product4.id = 'cup';
    let cup = document.createElement('option');
    cup.innerText = 'Cup';
    let nCup = document.createElement('option');
    nCup.innerText = 'N.cup';
    product4.appendChild(cup);
    product4.appendChild(nCup);

    childDiv2.appendChild(product1);
    childDiv2.appendChild(product2);
    childDiv2.appendChild(product3);
    childDiv2.appendChild(product4);

    //create child div3
    let childDiv3 = document.createElement('div');
    childDiv3.classList.add('amount-wrap')
    let input1 = document.createElement('input');
    input1.classList.add('amount');
    input1.setAttribute('disabled', true);
    input1.placeholder = 'Total';
    input1.type = 'number';
    let input2 = document.createElement('input');
    input2.classList.add('amount');
    input2.placeholder = 'Cash';
    input2.type = 'number';
    let input3 = document.createElement('input');
    input3.classList.add('amount');
    input3.setAttribute('disabled', true);
    input3.placeholder = 'Due';
    input3.type = 'number';

    childDiv3.appendChild(input1);
    childDiv3.appendChild(input2);
    childDiv3.appendChild(input3);

    //add child div to parent div
    parentDiv.appendChild(childDiv1);
    parentDiv.appendChild(childDiv2);
    parentDiv.appendChild(childDiv3);

    //add parent div to doby
    let display = document.getElementById("display-of-today's-sale");
    display.appendChild(parentDiv);
});

//collection
document.getElementById('add-collection-field').addEventListener('click', function () {
    //create parent div
    let parentDiv = document.createElement('div');
    parentDiv.classList.add('collection');

    //create child div1
    let childDiv1 = document.createElement('div');
    childDiv1.classList.add('shop-name-wrap');
    let input = document.createElement('input');
    input.classList.add('shop-name');
    input.placeholder = 'Shop Name';
    childDiv1.appendChild(input);

    //create child div 2
    let childDiv2 = document.createElement('div');
    childDiv2.classList.add('collection-wrap');

    let input1 = document.createElement('input');
    input1.classList.add('coll-amount');
    input1.type = 'number';
    input1.placeholder = 'Collection';

    let input2 = document.createElement('input');
    input2.classList.add('due-amount');
    input2.type = 'number';
    input2.setAttribute('disabled', true);
    input2.placeholder = 'Remaing Due';

    childDiv2.appendChild(input1);
    childDiv2.appendChild(input2);

    //add child div to parent
    parentDiv.appendChild(childDiv1);
    parentDiv.appendChild(childDiv2);

    //add parent div to body
    let display = document.getElementById('display-of-collection');
    display.appendChild(parentDiv);
});

//calculation product price
function coffeePrice() {
    let coffeeField = document.getElementById('coffee-price');
    let options = coffeeField.options[coffeeField.selectedIndex].value;

    if (options == 'S.P.C') {
        options = 480;
    }
    else if (options == 'P.C.C') {
        options = 400;
    }
    else if (options == 'P.C') {
        options = 430;
    }
    else if (options == 'N.P.C') {
        options = 550;
    }
    else {
        options = 0;
    }
    return options
}
function milkPrice() {
    let milkField = document.getElementById('milk-tea');
    let options = milkField.options[milkField.selectedIndex].value;

    if (options == 'P.T') {
        options = 370;
    }
    else if (options == 'R.T') {
        options = 330;
    }
    else if (options == 'Masala.T') {
        options = 390;
    }
    else {
        options = 0;
    }
    return options;
}
function redTeaPrice() {
    let redTeaField = document.getElementById('red-tea');
    let options = redTeaField.options[redTeaField.selectedIndex].value;
    if (options == 'Red.T') {
        options = 330;
    }
    else {
        options = 0;
    }
    return options;
}
function cupPrice() {
    let cupField = document.getElementById('cup');
    let options = cupField.options[cupField.selectedIndex].value;
    if (options == 'Cup') {
        options = 130;
    }
    else if (options == 'N.cup') {
        options = 90;
    }
    else if (options == 'P.P') {
        options = 60;
    }
    else {
        options = 0;
    }
    return options;
}

function displayTotalAmount() {
    let display = document.getElementById('total-sale');
    let coffee = parseInt(coffeePrice());
    let milkTea = parseInt(milkPrice());
    let redTea = parseInt(redTeaPrice());
    let cup = parseInt(cupPrice());
    display.value = coffee + milkTea + redTea + cup;
}

function displayRemainingDue() {
    let total = document.getElementById('total-sale');
    let cash = document.getElementById('cash');
    let due = document.getElementById('due');
    due.value = total.value - cash.value;
}
