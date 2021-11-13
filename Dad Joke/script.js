const jokeElement= document.getElementById("joke");
const nextJokeBtn=document.getElementById("jokeBtn");

generateJoke();
nextJokeBtn.addEventListener('click',generateJoke)


async function generateJoke() {
    const config = {
        headers:{
            Accept:"application/json",
        },
    };

   const res = await fetch("https://icanhazdadjoke.com", config)
   console.log(res);
   const data = res.json;
   console.log(data);
   jokeElement.innerHTML=data.joke;

}
//     .then(response => response.json())
//     .then(data => {
//         jokeElement.innerHTML=data.joke;
//     });
// }