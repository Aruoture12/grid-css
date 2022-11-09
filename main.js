var sliderimg = document.querySelector('.slider');
var pictures = ['bus.png', 'business-neg.png', 'business.png', 'handshake.png', 'Real-Estate.png', 'realestate.png'];
var i = 0;

function prev() {
    if (i <= 0) i = pictures.length;
    i--;
    return setImg();
}

function next() {
    if (i >= pictures.length - 1) i = -1;
    i++;
    return setImg();
}

function setImg() {
    return sliderimg.setAttribute('src', 'images/' + pictures[i]);
}