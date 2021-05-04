const body = document.querySelector('body');
const nav = document.querySelector('nav');
const navOffsetTop = nav.offsetTop;

function fixNav(){
    console.log(navOffsetTop, window.scrollY);

    if(window.scrollY >= navOffsetTop){
        body.classList.add('fixed-nav');
        body.style.paddingTop = nav.offsetHeight + 'px';
    }
    else{
        body.classList.remove('fixed-nav');
        body.style.paddingTop = 0;
    }
}

window.addEventListener('scroll', fixNav)