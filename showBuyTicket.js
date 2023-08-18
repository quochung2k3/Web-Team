const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close')
modalClose.addEventListener('click', hideBuyTickets)
function showBuyTickets() {
    modal.classList.add('open')
}

function hideBuyTickets() {
    modal.classList.remove('open')
}

for(const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}
modal.addEventListener('click', hideBuyTickets)
modalContainer.addEventListener('click', function(event) {
    event.stopPropagation()
})