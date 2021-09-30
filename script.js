let total = 0;
//Adding function to remove button
let removeBtn = document.querySelectorAll(`.remove-button`);
for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener(`click`, function (e) {
        let clickedButton = e.target;
        clickedButton.parentElement.remove();
        totalChangeAfterRemoveBtn();
    });
};
//Making a function called totalChangeAfterRemoveBtn so that it will run whenever we click on remove button it should update the total it will also include a function called update total.
function totalChangeAfterRemoveBtn() {
    let cartRow = document.querySelector(`.cart-items`).querySelectorAll(`.cartRow`);
    cartRow.length === 0 ? total = 0 : updateTotal();
    document.querySelector(`.cost`).querySelector(`span`).textContent = `$${total}`;
};
//Making a function called updateTotal which will take the number of quanitity input and cost of each piece and multiply them to calculate the total cost
function updateTotal() {
    total = 0;
    let productPriceElement = document.querySelector(`.cart-items`).querySelectorAll(`.cartRow`);
    let productQuantityElement = document.querySelector(`.cart-items`).querySelectorAll(`.cartRow`);
    for (let i = 0; i < productPriceElement.length; i++) {
        total += Number(productPriceElement[i].querySelector(`.in-cart-price`).textContent.replace(`$`, ``)) * Number(productQuantityElement[i].querySelector(`input`).value);
    };
    total = Math.round(total * 1) / 1;
    document.querySelector(`.cost`).querySelector(`span`).textContent = `$${total}`;
};
//adding event listener to input value so that whhenever we make any chages it should update the total
let quantityInput = document.querySelector(`.cart-items`).querySelectorAll(`.cartRow`);
for (let i = 0; i < quantityInput.length; i++) {
    quantityInput[i].querySelector(`input`).addEventListener(`change`, function (event) {
        if (event.target.value <= 0) {
            event.target.value = 1;
        };
        updateTotal();
    });
};
//Adding any item to the cart
let addToCartButtons = document.querySelectorAll(`.add-cart-button`);
for (let item of addToCartButtons) {
    item.addEventListener(`click`, addtoCartFunction);
};
function addtoCartFunction(event) {

    let parentElement = event.target.parentElement.parentElement;
    let imageForCart = parentElement.querySelector(`.item-images`).src;
    let titleForCart = parentElement.querySelector(`.item-title`).textContent;
    let cartRowNumber = document.querySelector(`.cart-items`).querySelectorAll(`.cartRow`);
    for (let i = 0; i < cartRowNumber.length; i++) {
        if (cartRowNumber[i].querySelector(`span`).textContent == titleForCart) {
            alert(`Item is already to the cart`);
            return;
        };
    };
    let priceForCart = parentElement.querySelector(`.item-cost`).textContent;
    let newCartRow = document.createElement(`div`);
    newCartRow.classList.add(`cartRow`);
    let newCartRowContents = `
    <img src="${imageForCart}" alt="" class="in-cart-image">
    <div class="in-cart-title"><span>${titleForCart}</span></div>
    <div class="in-cart-price"><span>${priceForCart}</span></div>
    <div class="quantity-input"><input type="number" value="1"></div>
    <button class="remove-button">REMOVE</button>`
    newCartRow.innerHTML = newCartRowContents;
    document.querySelector(`.cart-items`).appendChild(newCartRow);

    //Adding event listener to  quantity input to the added cart rows
    let quantityInput = document.querySelector(`.cart-items`).querySelectorAll(`.cartRow`);
    for (let i = 0; i < quantityInput.length; i++) {
        quantityInput[i].querySelector(`input`).addEventListener(`change`, function (event) {
            if (event.target.value <= 0) {
                event.target.value = 1;
            };
            updateTotal();
        });
    };
    //Adding event listener to remove button
    let removeBtn = document.querySelectorAll(`.remove-button`);
    for (let i = 0; i < removeBtn.length; i++) {
        removeBtn[i].addEventListener(`click`, function (e) {
            let clickedButton = e.target;
            clickedButton.parentElement.remove();
            totalChangeAfterRemoveBtn();
        });
    };
    //adding total update to update the total
    updateTotal();
};
