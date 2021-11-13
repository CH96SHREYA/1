const toggleButtons =document.querySelectorAll('.faq-toggle');

console.log(toggleButtons);
toggleButtons.forEach(toggleButton => {
    toggleButton.addEventListener('click',()=>{
        toggleButton.parentNode.classList.toggle('active');
    })
});

function toggleCard(elem){
    console.log("event");
    elem.parentNode.classList.toggle('active')
}