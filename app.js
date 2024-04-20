//these variables get the classes from html
const switch_btn = document.querySelector(".switch-btn") 
const video = document.querySelector(".video-container")
switch_btn.addEventListener("click", function checker(){
    //if the video is playing and the pause button is clicked
    if(!switch_btn.classList.contains('slide')){
        //slide goes to right
        switch_btn.classList.add('slide')
        //video pauses
        video.pause()
    //if the video is paused and the play button is clicked
    } else if(switch_btn.classList.contains('slide')){
        //slide goes to left
        switch_btn.classList.remove('slide')
        //video plays
        video.play()
    }
})
//These lines of code create a gif to appear while the program loads the website video incase of low internet
const preload = document.querySelector(".preloader")
window.addEventListener("load", function loading(){
    preload.classList.add("hide-preloader")
})