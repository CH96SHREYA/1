const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;
next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) currentActive = circles.length;
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) currentActive = 1;

  update();
});

function update(){
    circles.forEach((circle,idx)=>{
        console.log(idx,currentActive);
        if(idx<currentActive)
            circle.classList.add('active');
        else
            circle.classList.remove('active');
    })
    const activeCircle = document.querySelectorAll(".active");
    let setWidth=(activeCircle.length-1)/(circles.length-1)*100+'%';
    progress.style.width=setWidth;

    if(activeCircle.length===circles.length)
        next.disabled=true;
    else if(activeCircle.length===1)
        prev.disabled=true;
    else{
        prev.disabled=false;
        next.disabled=false;
    }

}