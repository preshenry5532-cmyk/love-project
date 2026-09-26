const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

// YES button
yesBtn.addEventListener("click", function () {
    message.textContent = "I knew it! ❤️🥰";

    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});

// NO button
noBtn.addEventListener("mouseover", function () {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
