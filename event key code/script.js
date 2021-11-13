const keyDisplay = document.getElementById("insert");
window.addEventListener("keydown", (event) => {
  keyDisplay.innerHTML = `
    <div class="key">
        ${event.key === ' '? 'Space':event.key}
        <small>event.key</small>
      </div>
      <div class="key">
        ${event.code}
        <small>event.keyCode</small>
      </div>
      <div class="key">
        ${event.keyCode}
        <small>event.code</small>
      </div>
    `;
});

// console.log(key ," ", code);
//     const divElements =keyDisplay.getElementsByTagName("div");
//     console.log(divElements);
//         divElements[0].innerHTML= key;
//         divElements[1].innerHTML=code;
//       //  divElements[2]=keyCode
