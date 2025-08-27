// heart functionalities
const heart = document.getElementsByClassName("fa-heart");
const heartCount = document.getElementById("heart-count");
for (i = 0; i < heart.length; i++) {
  heart[i].addEventListener("click", () => {
    const newValue = parseInt(heartCount.innerText) + 1;
    heartCount.innerText = newValue;
  });
}

document.getElementById("call-btn-1").addEventListener("click", () => {
  const emNum = document.getElementById("emergency-num").innerText;
  const newELement = document.createElement("section");

  const emName = document.getElementById("emergency-name").innerText;
  const par = document.getElementById("gg");
  const timeNow = new Date().toLocaleTimeString();
  alert(`☎️ Calling ${emName} ${emNum}....`);
  newELement.innerHTML = `<div class='flex justify-between p-2 items-center bg-[#FAFAFA] mb-2 rounded-xl'><div class='flex flex-col'><h1 class='font-inter font-semibold text-lg w-[200px]'>${emName}</h1><p>${emNum}</p></div><div><h1>${timeNow}</h1></div></div>`;

  par.appendChild(newELement);
});
