var prices = [
    [100, 200, 300],
    [100, 200]
]

var priceOfSelected = [0, 0]
var transportPrice = 0;

document.addEventListener('DOMContentLoaded', function () {
    // console.log('dziala');

    var arrows = document.querySelectorAll('.list_arrow');

    for (var i = 0; i < arrows.length; i++) {
        var arrow = arrows[i];
        arrow.addEventListener('click', toggleMenu)
    }

    var chairNames = document.querySelectorAll('.list_panel')[0].children;
    for (var i = 0; i < chairNames.length; i++) {
        chairNames[i].addEventListener('click', toggleChairName);
    }

    var lists = document.querySelectorAll('.list_panel');
    for (var i = 1; i < lists.length; i++) {

        var list = lists[i];
        for (var j = 0; j < list.children.length; j++) {
            var option = list.children[j];
            option.addEventListener('click', selectOption.bind(option, list, i - 1, j));
        }
    }

    var transportInput = document.querySelector('#transport');
    transportInput.addEventListener('click', toggleTransport);

});

function toggleMenu() {

    var menu = this.nextElementSibling;

    if(menu.style.display == 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }

    // menu.style.display == 'block' ?
    //     menu.style.display = 'none' :
    //     menu.style.display = 'block';
}

function toggleChairName() {
    var menu = this.parentElement;
    var label = menu.previousElementSibling.previousElementSibling;
    var titleElement = document.querySelector('.panel_left h4.title');

    hideMenu(menu);

    label.innerHTML = this.innerHTML;
    titleElement.innerHTML = this.innerHTML;
}

function selectOption(list, listIndex, optionIndex) {
    var text = this.innerHTML;
    var label = list.previousElementSibling.previousElementSibling;
    var price = prices[listIndex][optionIndex];


    showOption(listIndex, text, price);
    label.innerHTML = text;
    hideMenu(list);
    priceOfSelected[listIndex] = price;
    calculateSum();
}

function showOption(listIndex, text, price) {
    var description = document.querySelectorAll('.panel_left span')[listIndex];
    description.innerHTML = text;

    var priceElement = document.querySelectorAll('.panel_right span')[listIndex];
    priceElement.innerHTML = price;
}

function calculateSum() {
    var sumElement = document.querySelector('.sum strong');
    var sum = 0;
    for (var i = 0; i < priceOfSelected.length; i++) {
        sum += priceOfSelected[i];
    }
    sum += transportPrice;
    sumElement.innerHTML = sum;
}

function hideMenu(menu) {
    menu.style.display = 'none';
}

function toggleTransport() {
    var checked = this.checked;
    var actualPrice =  checked ? + this.dataset.transportPrice : 0;

    var trasportDesc = document.querySelector('.panel_left span.transport')
    trasportDesc.innerHTML = 'transport';

    var trasportElement = document.querySelector('.panel_right span.transport')
    trasportElement.innerHTML = actualPrice;

    transportPrice = actualPrice;
    calculateSum();
}
