let currentslideimg = 0;
const sliders = document.querySelectorAll('.slideimg');

function showslideimg(index) {
    sliders.forEach((slideimg, i) => {
        if (i === index) {
            slideimg.style.display = 'block';
        } else {
            slideimg.style.display = 'none';
        }
    });
}

function nextslideimg() {
    currentslideimg = (currentslideimg + 1) % sliders.length;
    showslideimg(currentslideimg);
}

function startslider() {
    setInterval(nextslideimg, 2500);
}

showslideimg(currentslideimg);
startslider();