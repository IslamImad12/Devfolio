let num = document.querySelectorAll('.num');
let section = document.querySelector('.increase');
let started = false

window.onscroll = function () {
    if(window.scrollY >= section.offsetTop) {
        if(!started) {
            for(let i=0;i<4;i++) {
                startCout(num[i])
            }
            started = true;
        }
    }
}

function startCout(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(count);
        }
    } , 10)
}
