// heart functionalities
const heart = document.getElementsByClassName("fa-heart");
const heartCount = document.getElementById("heart-count");
for (i = 0; i < heart.length; i++) {
  heart[i].addEventListener("click", () => {
    const newValue = parseInt(heartCount.innerText) + 1;
    heartCount.innerText = newValue;
  });
}

// clear btn function
const oka = document.getElementById("sob");
oka.addEventListener("click", () => {
  location.reload();
});

// call functions
const coinCount = document.getElementById("coin-count");
document.getElementById("call-btn-1").addEventListener("click", () => {
  const emNum = document.getElementById("emergency-num").innerText;
  const newELement = document.createElement("section");
  const emName = document.getElementById("emergency-name").innerText;
  const par = document.getElementById("gg");
  const timeNow = new Date().toLocaleTimeString();

  if (parseInt(coinCount.innerText) > 0) {
    alert(`☎️ Calling ${emName} ${emNum}....`);
    newELement.innerHTML = `<div class='flex justify-between p-2 items-center bg-[#FAFAFA] mb-2 rounded-xl'><div class='flex flex-col'><h1 class='font-inter font-semibold text-lg w-[200px]'>${emName}</h1><p>${emNum}</p></div><div><h1>${timeNow}</h1></div></div>`;
    par.appendChild(newELement);
    const newValue = parseInt(coinCount.innerText) - 20;
    coinCount.innerText = newValue;
    console.log(newValue);
  } else {
    alert("insufficient Balance for call");
  }
});
// card 2
document.getElementById("call-btn-2").addEventListener("click", () => {
  const emNum = document.getElementById("emergency-num-2").innerText;
  const newELement = document.createElement("section");
  const emName = document.getElementById("emergency-name-2").innerText;
  const par = document.getElementById("gg");
  const timeNow = new Date().toLocaleTimeString();

  if (parseInt(coinCount.innerText) > 0) {
    alert(`☎️ Calling ${emName} ${emNum}....`);
    newELement.innerHTML = `<div class='flex justify-between p-2 items-center bg-[#FAFAFA] mb-2 rounded-xl'><div class='flex flex-col'><h1 class='font-inter font-semibold text-lg w-[200px]'>${emName}</h1><p>${emNum}</p></div><div><h1>${timeNow}</h1></div></div>`;
    par.appendChild(newELement);
    const newValue = parseInt(coinCount.innerText) - 20;
    coinCount.innerText = newValue;
    console.log(newValue);
  } else {
    alert("insufficient Balance for call");
  }
});
// card 3
document.getElementById("call-btn-3").addEventListener("click", () => {
  const emNum = document.getElementById("emergency-num-3").innerText;
  const newELement = document.createElement("section");
  const emName = document.getElementById("emergency-name-3").innerText;
  const par = document.getElementById("gg");
  const timeNow = new Date().toLocaleTimeString();

  if (parseInt(coinCount.innerText) > 0) {
    alert(`☎️ Calling ${emName} ${emNum}....`);
    newELement.innerHTML = `<div class='flex justify-between p-2 items-center bg-[#FAFAFA] mb-2 rounded-xl'><div class='flex flex-col'><h1 class='font-inter font-semibold text-lg w-[200px]'>${emName}</h1><p>${emNum}</p></div><div><h1>${timeNow}</h1></div></div>`;
    par.appendChild(newELement);
    const newValue = parseInt(coinCount.innerText) - 20;
    coinCount.innerText = newValue;
    console.log(newValue);
  } else {
    alert("insufficient Balance for call");
  }
});
// card 4
document.getElementById("call-btn-4").addEventListener("click", () => {
  const emNum = document.getElementById("emergency-num-4").innerText;
  const newELement = document.createElement("section");
  const emName = document.getElementById("emergency-name-4").innerText;
  const par = document.getElementById("gg");
  const timeNow = new Date().toLocaleTimeString();

  if (parseInt(coinCount.innerText) > 0) {
    alert(`☎️ Calling ${emName} ${emNum}....`);
    newELement.innerHTML = `<div class='flex justify-between p-2 items-center bg-[#FAFAFA] mb-2 rounded-xl'><div class='flex flex-col'><h1 class='font-inter font-semibold text-lg w-[200px]'>${emName}</h1><p>${emNum}</p></div><div><h1>${timeNow}</h1></div></div>`;
    par.appendChild(newELement);
    const newValue = parseInt(coinCount.innerText) - 20;
    coinCount.innerText = newValue;
    console.log(newValue);
  } else {
    alert("insufficient Balance for call");
  }
});
// card 5
document.getElementById("call-btn-5").addEventListener("click", () => {
  const emNum = document.getElementById("emergency-num-5").innerText;
  const newELement = document.createElement("section");
  const emName = document.getElementById("emergency-name-5").innerText;
  const par = document.getElementById("gg");
  const timeNow = new Date().toLocaleTimeString();

  if (parseInt(coinCount.innerText) > 0) {
    alert(`☎️ Calling ${emName} ${emNum}....`);
    newELement.innerHTML = `<div class='flex justify-between p-2 items-center bg-[#FAFAFA] mb-2 rounded-xl'><div class='flex flex-col'><h1 class='font-inter font-semibold text-lg w-[200px]'>${emName}</h1><p>${emNum}</p></div><div><h1>${timeNow}</h1></div></div>`;
    par.appendChild(newELement);
    const newValue = parseInt(coinCount.innerText) - 20;
    coinCount.innerText = newValue;
    console.log(newValue);
  } else {
    alert("insufficient Balance for call");
  }
});
// card 6
document.getElementById("call-btn-6").addEventListener("click", () => {
  const emNum = document.getElementById("emergency-num-6").innerText;
  const newELement = document.createElement("section");
  const emName = document.getElementById("emergency-name-6").innerText;
  const par = document.getElementById("gg");
  const timeNow = new Date().toLocaleTimeString();

  if (parseInt(coinCount.innerText) > 0) {
    alert(`☎️ Calling ${emName} ${emNum}....`);
    newELement.innerHTML = `<div class='flex justify-between p-2 items-center bg-[#FAFAFA] mb-2 rounded-xl'><div class='flex flex-col'><h1 class='font-inter font-semibold text-lg w-[200px]'>${emName}</h1><p>${emNum}</p></div><div><h1>${timeNow}</h1></div></div>`;
    par.appendChild(newELement);
    const newValue = parseInt(coinCount.innerText) - 20;
    coinCount.innerText = newValue;
    console.log(newValue);
  } else {
    alert("insufficient Balance for call");
  }
});
// card 7
document.getElementById("call-btn-7").addEventListener("click", () => {
  const emNum = document.getElementById("emergency-num-7").innerText;
  const newELement = document.createElement("section");
  const emName = document.getElementById("emergency-name-7").innerText;
  const par = document.getElementById("gg");
  const timeNow = new Date().toLocaleTimeString();

  if (parseInt(coinCount.innerText) > 0) {
    alert(`☎️ Calling ${emName} ${emNum}....`);
    newELement.innerHTML = `<div class='flex justify-between p-2 items-center bg-[#FAFAFA] mb-2 rounded-xl'><div class='flex flex-col'><h1 class='font-inter font-semibold text-lg w-[200px]'>${emName}</h1><p>${emNum}</p></div><div><h1>${timeNow}</h1></div></div>`;
    par.appendChild(newELement);
    const newValue = parseInt(coinCount.innerText) - 20;
    coinCount.innerText = newValue;
    console.log(newValue);
  } else {
    alert("insufficient Balance for call");
  }
});
// card 8
document.getElementById("call-btn-8").addEventListener("click", () => {
  const emNum = document.getElementById("emergency-num-8").innerText;
  const newELement = document.createElement("section");
  const emName = document.getElementById("emergency-name-8").innerText;
  const par = document.getElementById("gg");
  const timeNow = new Date().toLocaleTimeString();

  if (parseInt(coinCount.innerText) > 0) {
    alert(`☎️ Calling ${emName} ${emNum}....`);
    newELement.innerHTML = `<div class='flex justify-between p-2 items-center bg-[#FAFAFA] mb-2 rounded-xl'><div class='flex flex-col'><h1 class='font-inter font-semibold text-lg w-[200px]'>${emName}</h1><p>${emNum}</p></div><div><h1>${timeNow}</h1></div></div>`;
    par.appendChild(newELement);
    const newValue = parseInt(coinCount.innerText) - 20;
    coinCount.innerText = newValue;
    console.log(newValue);
  } else {
    alert("insufficient Balance for call");
  }
});
// card 9
document.getElementById("call-btn-9").addEventListener("click", () => {
  const emNum = document.getElementById("emergency-num-9").innerText;
  const newELement = document.createElement("section");
  const emName = document.getElementById("emergency-name-9").innerText;
  const par = document.getElementById("gg");
  const timeNow = new Date().toLocaleTimeString();

  if (parseInt(coinCount.innerText) > 0) {
    alert(`☎️ Calling ${emName} ${emNum}....`);
    newELement.innerHTML = `<div class='flex justify-between p-2 items-center bg-[#FAFAFA] mb-2 rounded-xl'><div class='flex flex-col'><h1 class='font-inter font-semibold text-lg w-[200px]'>${emName}</h1><p>${emNum}</p></div><div><h1>${timeNow}</h1></div></div>`;
    par.appendChild(newELement);
    const newValue = parseInt(coinCount.innerText) - 20;
    coinCount.innerText = newValue;
    console.log(newValue);
  } else {
    alert("insufficient Balance for call");
  }
});

