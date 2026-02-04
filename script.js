// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click envelope

envelope.addEventListener("click", () =>{
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(()=>{
        document.querySelector(".letter-window").classList.add("open")

    },50);
});

//unclickable no
noBtn.addEventListener("mouseover", ()=>{
    
    const rect = noBtn.getBoundingClientRect();
    const screenWidth = window.innerWidth-200;
    const screenHeight = window.innerHeight-200;
    //const padding = 100;

    const distance=Math.random() * 200 + 100;
    const angle = Math.random() * Math.PI *2;

    let moveX = Math.cos(angle) *distance;
    let moveY = Math.sin(angle) *distance;

    if (rect.left + moveX < 0 || rect.right + moveX > screenWidth) {
        moveX = -moveX; 
    }
    if (rect.top + moveY < 0 || rect.bottom + moveY > screenHeight) {
        moveY = -moveY;
    }

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;

});

noBtn.addEventListener("click", ()=>{
    title.textContent = "oh...";
    catImg.src = "peach-goma-no.gif";
    document.querySelector(".letter-window").classList.add("final");
    buttons.style.display="none";

})

yesBtn.addEventListener("click", ()=>{
    title.textContent = "Yippee!!!";
    catImg.src = "peach-goma-yes.gif";
    document.querySelector(".letter-window").classList.add("final");
    buttons.style.display="none";
    finalText.style.display="block";
});
