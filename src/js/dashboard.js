const dashBoard = () => {
    const btn = document.querySelector('.dashCollapse')
    const fblock = document.querySelector('.dashFilters')
    const chfltrs = document.querySelectorAll('.checkFilter');

    btn.addEventListener('click', () => {
        fblock.classList.toggle('hide')
        btn.classList.toggle('hide')

        chfltrs.forEach(fl => fl.classList.toggle('hide'))
    })
}

dashBoard()