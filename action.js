const heart = document.getElementsByClassName("fa-heart");
const heartCount = document.getElementById("heart-count");
for (i=0; i<heart.length; i++){
    heart[i].addEventListener('click', () =>{
        const newValue = parseInt(heartCount.innerText) + 1;
        heartCount.innerText = newValue;
    })
}