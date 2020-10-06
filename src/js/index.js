// import 'bootstrap/dist/js/bootstrap.bundle';
// import 'jquery';
import '../scss/style.scss';
import './base';

const sign_in_btn=document.querySelector('#sign-in-btn');
const sign_up_btn=document.querySelector('#sign-up-btn');
const container=document.querySelector('.container');

sign_up_btn.addEventListener('click',()=>{
    container.classList.add("sign-up-mode");
})
sign_in_btn.addEventListener('click',()=>{
    // container.classList.add("sign-in-mode");
    container.classList.remove("sign-up-mode");
})
