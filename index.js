let countDown = new Date("Dec 30, 2023 23:59:59").getTime();
let counter = setInterval(()=>{
    let dateNow = new Date().getTime();
    let dateDif = countDown - dateNow;
    let days = Math.floor(dateDif / (1000 * 60 * 60 *24));
    let hours = Math.floor((dateDif % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDif % (1000 * 60 * 60)) / (1000 * 60) );
    let secondes = Math.floor((dateDif % (1000 * 60)) / (1000) );
    document.querySelector(".days").innerHTML = days < 10 ? `0${days}`: days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}`: hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}`: minutes;
    document.querySelector(".secondes").innerHTML = secondes < 10 ? `0${secondes}`: secondes;
    if(dateDif < 0){
        clearInterval(counter);
    }
},1000);
let nums = document.querySelectorAll(".container .number");
let section = document.querySelector(".stats");
let started = false;
window.onscroll = function(){
    if(window.scrollY >= section.offsetTop){
        if(!started){
            nums.forEach((nums)=>startEl(nums));
            console.log(!started);
        }
        started = true;
    }
}
function startEl(el){
    let goal = el.dataset.goal;
    let counter = setInterval(()=>{
        el.textContent++;
        if(el.textContent === goal){
            clearInterval(counter);
        }
    },2000 / goal)
}
let skillSection = document.querySelector(".our-skills")
let skills = document.querySelectorAll(".progress .skill-width");
window.onscroll = function(){
    if(window.scrollY >= skillSection.offsetTop + 100){
        skills.forEach((span)=>{
            span.style.width = span.dataset.width;
        })
    }
}