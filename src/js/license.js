const licence = () => {
    const btn = document.querySelector('.dots')
    const license = document.querySelector('.license')

    btn.addEventListener('click', () => {
        license.classList.toggle('hide')
    })
}

licence()