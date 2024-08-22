const btn = document.getElementById('menu-btn')


btn.addEventListener('click',btnTogle)

function btnTogle(){
    btn.classList.toggle('open')
}