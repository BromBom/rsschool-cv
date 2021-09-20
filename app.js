const burger = document.querySelector('.header-menu__burger');
const menu = document.querySelector('.header-menu__menu');


burger.addEventListener('click', dropMenu);
menu.addEventListener('click', hideMenu);

function dropMenu() {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
}

function hideMenu() {
    burger.classList.remove('active');
    menu.classList.remove('active');
}

console.log("Не успел реализовать видеорезюме: -10 баллов.")
console.log("Все оставшиеся пункты требований к CV выполнены")
console.log("Самооценка ИТОГО: 150/160 баллов");
