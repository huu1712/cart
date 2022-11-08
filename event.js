let modal = document.querySelector('.modal')
let buttonModal = document.querySelector('.btn-cart')


buttonModal.addEventListener('click', function (){
    modal.classList.toggle("show")
})

modal.addEventListener('click', function (){
    modal.classList.remove("show")
})

