const searchDiv= document.querySelector('.search');
const searchBtn=document.querySelector('.btn');
const input =document.querySelector('.input');

searchBtn.addEventListener('click',()=>{
    searchDiv.classList.toggle('active');
    input.focus();
})