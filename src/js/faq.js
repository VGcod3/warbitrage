const faq = () => {
    const ns = [1, 2, 3, 4, 5, 6, 7, 8];

    ns.forEach(n => {

        const faqHeader = document.querySelector(`.faq-header${n}`);
        // console.log(`.faq-header${n}`);

        const btn = faqHeader.querySelector('img')
        console.log(btn);

        const faqBody = document.querySelector(`.faq-body${n}`);

        faqHeader.addEventListener('click', () => {
            btn.classList.toggle('hide')

            faqBody.classList.toggle('hide')

            console.log('hi');
        })

    })
}

faq()