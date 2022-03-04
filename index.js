let canvas = document.getElementById("canvas");
let cursor = document.getElementById("cursor");

let fistCursor = new Image;
let pointerCursor = new Image;

fistCursor.src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/310/raised-fist_270a.png";
pointerCursor.src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/310/backhand-index-pointing-up_1f446.png";

let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let cursorSize = 50;
let currentCursor = fistCursor;

// clear canvas
ctx.clearRect(0, 0, canvas.width, canvas.height);

// draw cursor image
ctx.drawImage(currentCursor, 0, 0, cursorSize, cursorSize);


window.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    let cursorXpos = x - cursorSize * 30 / 100;
    let cursorYpos = y - cursorSize * 10 / 100;

    // clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw cursor image
    ctx.drawImage(currentCursor, cursorXpos, cursorYpos, cursorSize, cursorSize);
});

window.addEventListener("resize", (e) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

let links = document.querySelectorAll("a");
links.forEach(link => {
    link.addEventListener("mouseenter", (e) => {
        usePointerCursor();
    });

    link.addEventListener("mouseleave", (e) => {
        useFistCursor();
    });
});

const useFistCursor = () => {
    currentCursor = fistCursor;
}

const usePointerCursor = () => {
    currentCursor = pointerCursor;
}