let budgetTotal = document.getElementById('budgetTotal'),
    item = document.getElementById('item'),
    amount = document.getElementById('amount'),
    addItem = document.getElementById('addItem'),
    billAddedUl = document.getElementById('billAdded'),
    billAmountAdded = document.getElementById('billAmountAdded'),
    trashCan = document.getElementById('trashCan'),
    budgetTracker = document.getElementById('budgetTracker');




function increaseTotal() {
    // budgetTotal = what needs to be updated
    // amount = the number that needs to be added to the budgetTotal
    let amountNum = parseFloat(amount.value)
    let total = parseFloat(budgetTotal.innerText);
    if (isNaN(amountNum)) {
        alert('This is not a number')
    } else {
        total += parseFloat(amountNum);
        budgetTotal.innerHTML = `${parseFloat(total)}`;
    }


}

function decreaseTotal(e) {
    //selecting the lis of each ul list
    let billNode = billAmountAdded.querySelectorAll('li')
    for (let i = 0; i < billNode.length; i++) {
        // spliting $ from the numStr
        let strNum = billAmountAdded.children[i].innerText.split('$')
        // turing strNum into num
        let strToNum = parseFloat(strNum[1])
        // turing total from string to num
        let total = parseFloat(budgetTotal.innerText).toFixed(2)


        let id = e.target.id;
        let bill = billAmountAdded.children[i]
        let billValue = bill.attributes.id.value
        //targeting the correct value to subtract from total
        if (id === billValue) {
            total -= strToNum
            budgetTotal.innerHTML = `${parseFloat(total.toFixed(2))}`;
        }
    }
    //checking to see if each li has the same id to delete all of the correct lis
}

let itemArr = [];

function addItems() {
    // adding the item for the billAdded id input field
    let inputText = item.value
    let inputNum = amount.value
    let li = document.createElement('li');
    if (isNaN(inputNum)) {
        return
    } else {
        li.innerText = inputText;
        // creating lis
        billAddedUl.append(li);
        li.style.listStyleType = 'none';
        // increasing the count so the li id can be updated when created
        itemArr.push(inputText)
        for (let i = 0; i < itemArr.length; i++) {
            let itemCount = i
            li.id = i
            itemCount++
        }
        item.value = ''

    }


}


function removeItem(e) {
    //selecting the lis of each ul list
    let trashNode = trashCan.querySelectorAll('li');
    //checking to see if each li has the same id to delete all of the correct lis
    for (let i = 0; i < trashNode.length; i++) {
        let trash = trashCan.children[i],
            item = billAddedUl.children[i],
            bill = billAmountAdded.children[i];

        let itemValue = item.attributes.id.value,
            billValue = bill.attributes.id.value

        let id = e.target.id;
        if (id === itemValue && id === billValue) {
            trash.remove()
            item.remove()
            bill.remove()
        }
    }
}

let countArr = []

function addAmounts() {
    // adding the amount for the billAmountAdded id input field
    let inputNum = amount.value
    let li = document.createElement('li');
    if (isNaN(inputNum)) {
        return
    } else {
        li.innerText = `$${inputNum}`;
        // creating lis
        billAmountAdded.append(li);
        li.style.listStyleType = 'none';
        // increasing the count so the li id can be updated when created
        countArr.push(inputNum)
        for (let i = 0; i < countArr.length; i++) {
            let itemCount = i
            li.id = i
            itemCount++
        }
    }



}

let trashArr = []

function addTrashCans() {
    // adding the trash cans for the trashCan id input field
    let inputPic = '<img src="assets/trash_can.svg" />';
    let inputNum = amount.value;
    let li = document.createElement('li');
    if (isNaN(inputNum)) {
        return
    } else {
        li.innerHTML = inputPic;
        let img = li.querySelector('img')
        // creating lis
        trashCan.append(li);
        li.style.listStyleType = 'none';
        // increasing the count so the li id can be updated when created
        trashArr.push(inputPic)
        for (let i = 0; i < trashArr.length; i++) {
            let itemCount = i
            img.id = i
            itemCount++
        }

    }

}


addItem.addEventListener('click', addItems)
addItem.addEventListener('click', addAmounts)
addItem.addEventListener('click', addTrashCans)
addItem.addEventListener('click', increaseTotal)
trashCan.addEventListener('click', decreaseTotal)
trashCan.addEventListener('click', removeItem)
trashCan.addEventListener('click', decreaseTotal)
