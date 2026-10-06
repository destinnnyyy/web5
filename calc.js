/*jslint browser */

function onCalc(event) {
    "use strict";
    event.preventDefault();

    const quantityField = document.getElementById("quantity");
    const productSelect = document.getElementById("product");
    const result = document.getElementById("result");
    const text = quantityField.value.trim();

    if (!(/^\d+$/).test(text)) {
        result.textContent = "Ошибка: в поле количества допустимы только цифры.";
        return;
    }

    const quantity = parseInt(text, 10);
    const price = parseInt(productSelect.value, 10);

    result.textContent = "Стоимость заказа: " + (price * quantity) + " руб.";
}

window.addEventListener("DOMContentLoaded", function () {
    "use strict";
    const form = document.getElementById("calc-form");
    form.addEventListener("submit", onCalc);
});
