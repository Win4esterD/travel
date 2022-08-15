'use strict'

const menu = document.getElementById('menu-mobile');
const burger = document.getElementById('burger');

const checks = document.querySelectorAll('.dots-item');
// const dotsArea = document.getElementByClassName('dots-block-mobile')[0];
const slides = document.querySelectorAll('.slide-items');
const arrows = document.querySelectorAll('.mobile-arrow');
const prevBtn = document.getElementById('left-button');
const nextBtn = document.getElementById('right-button');

let slideIndex = 0;

checks[slideIndex].classList.add('active');
slides[slideIndex].classList.add('active-slide');

checks.forEach((check, index) => {
    nextBtn.style.opacity = '1';
    check.addEventListener('click', () => {
        if (index == 0){
            check.classList.add("active");
            checks[1].classList.remove('active');
            checks[2].classList.remove('active');
            slides[index].classList.add('active-slide');
            slides[1].classList.remove('active-slide');
            slides[2].classList.remove('active-slide');
            slideIndex = 0;
            prevBtn.style.opacity = 0.5;
            nextBtn.style.opacity = 1;
        }else if (index == 1){
            slideIndex = 1;
            check.classList.add("active");
            checks[0].classList.remove('active');
            checks[2].classList.remove('active');
            slides[index].classList.add('active-slide');
            slides[0].classList.remove('active-slide');
            slides[2].classList.remove('active-slide');
            slideIndex = 1;
            prevBtn.style.opacity = 1;
            nextBtn.style.opacity = 1;
        }else if (index == 2){
            slideIndex = 2;
            check.classList.add('active');
            checks[0].classList.remove('active');
            checks[1].classList.remove('active');
            slides[index].classList.add('active-slide');
            slides[0].classList.remove('active-slide');
            slides[1].classList.remove('active-slide');
            slideIndex = 2;
            nextBtn.style.opacity = '0.5';
            prevBtn.style.opacity = '1';
        }
    })
});

arrows.forEach((arrow, index) => {
    arrow.addEventListener('click', () => {
        if(index == 1 && slideIndex != 2){
            nextBtn.style.opacity = '1';
            prevBtn.style.opacity = '0.5';
            if(slideIndex < 2){
                slideIndex += 1;
                checks[slideIndex - 1].classList.remove('active');
                slides[slideIndex - 1].classList.remove('active-slide');
                checks[slideIndex].classList.add('active');
                slides[slideIndex].classList.add('active-slide');
                if(slideIndex == 1){
                    nextBtn.style.opacity = '1';
                    prevBtn.style.opacity = '1';
                }else if (slideIndex == 2){
                    nextBtn.style.opacity = '0.5';
                    prevBtn.style.opacity = '1';
                }
            }
        }else if (index == 0){
            nextBtn.style.opacity = '1';
            prevBtn.style.opacity = '0.5';
            if(slideIndex > 0){
                slideIndex -= 1;
                checks[slideIndex + 1].classList.remove('active');
                slides[slideIndex + 1].classList.remove('active-slide');
                checks[slideIndex].classList.add('active');
                slides[slideIndex].classList.add('active-slide');
                if(slideIndex == 1){
                    nextBtn.style.opacity = '1';
                    prevBtn.style.opacity = '1';
                }else if (slideIndex == 0){
                    nextBtn.style.opacity = '1';
                    prevBtn.style.opacity = '0.5';
                }
            }
        }
    })
})

menu.addEventListener("click", function(){
    if(burger.style.display != "block"){
        burger.style.display = "block";
    }else {
        burger.style.display = "none";
    }   
});