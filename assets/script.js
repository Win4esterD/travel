'use strict'

const dots = document.querySelectorAll("#handler>label");
const popup = document.getElementById('popup');
const loginPopup = document.getElementById('login-popup');
const register = document.getElementById('register');
const signupPopup = document.getElementById('sign-up-pop-up');

let activeSlide = 1;


dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        if(index == '0'){
            document.getElementsByClassName('locations')[0].style.right = "-1.4%";
        }else if(index == '1'){
            document.getElementsByClassName('locations')[0].style.right = "21.6%";
        }else if(index == '2') {
            document.getElementsByClassName('locations')[0].style.right = "44.6%";
        }
        
        
    })
})

function popUp(){
    popup.style.display = 'block';

    register.addEventListener('click', () => {
        loginPopup.style.display = 'none';
        signupPopup.style.display = 'block';
    });
    
    document.addEventListener('click', outsideEvtListener);

    function outsideEvtListener(evt) {
        if (evt.target === loginPopup || loginPopup.contains(evt.target) || evt.target == signupPopup || signupPopup.contains(evt.target)) {
            // клик внутри
            return;
        } else{
            popDown();
        }
    }
}

function popDown(){
    document.getElementById('popup').style.display = 'none';
}

if(document.documentElement.clientWidth > 390){
    setTimeout(popUp, 3000);
}

