const sumbitBtn = document.getElementById('sumbit')
const closeBtn = document.getElementById('close')
const popup = document.querySelector('.popupContainer')
sumbitBtn.addEventListener('click', function () {
    popup.classList.add('popupActive')
})
closeBtn.addEventListener('click', function(){
    popup.classList.remove('popupActive')
})