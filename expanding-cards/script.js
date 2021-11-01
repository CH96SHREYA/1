const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveClass();
    panel.classList.add("active")
  });
});

function removeActiveClass(){
    console.log("into remove");
    panels.forEach(panel =>{
        panel.classList.remove('active')
    });
}
