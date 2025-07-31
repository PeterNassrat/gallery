var interval = null
var images = ['./images/1.jpg', './images/2.jpg', './images/3.jpg', './images/4.jpg', './images/5.jpg', './images/6.jpg']
var currImgIdx = 0
var img = document.getElementById('image')

document.getElementById('next-btn').addEventListener('click', nextPhoto)
document.getElementById('slideshow-btn').addEventListener('click', startShow)
document.getElementById('stop-btn').addEventListener('click', stopShow)
document.getElementById('previous-btn').addEventListener('click', previousPhoto)

function nextPhoto() {
    if(interval) stopShow()
    if(!isLasPhoto(currImgIdx)) {
        img.src = images[++currImgIdx]
    }
}

function startShow() {
    if(!interval) interval = setInterval(show, 2000)
}

function show() {
    nextImgIdx = (currImgIdx + 1) % images.length
    img.src = images[nextImgIdx]
    currImgIdx = nextImgIdx
}

function stopShow() {
    if(interval) {
        interval = clearInterval(interval)
    }
}

function previousPhoto() {
    if(interval) stopShow()
    if(!isFirstPhoto(currImgIdx)) {
        img.src = images[--currImgIdx]
    }
}

function isFirstPhoto(idx) {
    return idx === 0
}

function isLasPhoto(idx) {
    return idx === images.length - 1
}