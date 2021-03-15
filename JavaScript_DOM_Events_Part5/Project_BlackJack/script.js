const show = document.querySelector('.show-modal')
const hide = document.querySelector('.close-modal')

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')

const openModal = () => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

const closeModal = () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

show.addEventListener('click', openModal)
hide.addEventListener('click', closeModal)