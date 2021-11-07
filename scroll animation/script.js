const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll',checkBoxes);

//checkBoxes();

function checkBoxes(){
    const triggerPoint=window.innerHeight/5 *4;
   // console.log('triggerPoint',triggerPoint);

    boxes.forEach(box=>{
        console.log(box.firstChild.innerHTML);
        const boxTop= box.getBoundingClientRect().top;

        if(boxTop<triggerPoint){
        box.classList.add('show');
        console.log(boxTop, " ",triggerPoint);

        }
        else
        box.classList.remove('show')
    })

}