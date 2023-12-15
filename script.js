const header=document.querySelector("header")

window.addEventListener("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY>0);
})

let menu = document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};
window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
}

let clicks = 0;
 
        function addClick() {
            clicks = clicks + 1;
            document.querySelector('.total-clicks').textContent
                = clicks;
        }
 
        // Simulate click function
        function clickButton() {
            click_event = new CustomEvent('click');
            btn_element = document.querySelector('#btn1');
            btn_element.dispatchEvent(click_event);
        }
 
        // Simulate a click every second
        setInterval(clickButton, 1000);
