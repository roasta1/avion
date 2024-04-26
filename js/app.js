const top5 = () => {
    const btnClose = document.querySelector('#header div>svg')
    const row = document.querySelector('header>div')
    btnClose.addEventListener('click', () => {
        row.style.display = 'none'
    })
}

const quantity = () => {
    const spans = document.querySelectorAll('.quantitity span')
    spans[0].addEventListener('click', () => {
        if (Number(spans[1].innerHTML) - 1 >= 0){
        spans[1].innerHTML = Number(spans[1].innerHTML) - 1
        }
    })
    spans[2].addEventListener('click', () => {
        spans[1].innerHTML = Number(spans[1].innerHTML) + 1
    })
}


quantity()