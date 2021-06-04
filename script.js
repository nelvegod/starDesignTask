
let tabs = document.querySelectorAll('.tabs__item');
console.log(tabs);

tabs.forEach(tab => {
    tab.addEventListener('click', function () {
        tabs.forEach(tb => tb.classList.remove('active'));
        this.classList.add('active');
    });
});