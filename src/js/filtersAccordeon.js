const btn = document.querySelector('.filterCollapse');
const filtersRow = document.querySelector('.filters');
const setfilt = document.querySelector('.setfilt');

const filters = document.querySelectorAll('.filter');

function toggleCollapse() {
    [btn, filtersRow, setfilt, ...filters].forEach(el => el.classList.toggle('collapsed'))
}

btn.addEventListener('click', toggleCollapse);