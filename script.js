// var myN = 0;
var text = document.querySelector("#text");
var box = document.querySelector("#box");
function loginButton(){
    var login_btn = document.querySelector("#main-btn");
    var close_btn = document.querySelector("#close-icon");
    var box = document.querySelector("#box");
    login_btn.addEventListener("click", () => {
        box.style.transform = "scale(1)"
        text.innerHTML="Miskat: 'Now click on the Register link.'"
    });
    close_btn.addEventListener("click", ()=>{
        box.style.transform = "scale(0)"
        text.innerHTML = "Miskat: 'Please, click on the login button.'"
    })
}
function loginPopUpBoxShow(){
    var btns = document.querySelectorAll(".form-btn");
    var section1 = document.querySelector("#section-1");
    var nav = document.querySelector("nav");
    var thank_box_row = document.querySelector(".thank-box-row");
    var close_box_btn = document.querySelector("#close-box-btn");
    Array.from(btns).map((btn) =>{
        btn.addEventListener("click", ()=>{
            section1.classList.add("section1-change-bg");
            nav.style.display = "none";
            box.style.display = "none";
            thank_box_row.style.top = "50%";
            thank_box_row.style.transform = "translate(-50%, -50%) scale(1)";
            text.innerHTML = "Miskat: 'Thanks, click on the Ok button.'"
        })
    });
    close_box_btn.addEventListener("click", ()=>{
        thank_box_row.style.top = "-22%";
        thank_box_row.style.transform = "translate(-50%, -50%) scale(0)";
        section1.classList.remove("section1-change-bg");
        box.style.display = "flex";
        box.style.transform = "scale(0)"
        nav.style.display = "flex";
        text.innerHTML = "Miskat: 'Please click on the login button.'"
    })
}
function boxMoveing(){
    var login_box = document.querySelector(".login-box");
    var register_box = document.querySelector(".register-box");
    var register_text_btn = document.querySelector("#register-text-btn");
    var login_text_btn = document.querySelector("#login-text-btn");
    // console.log(login_text_btn)
    register_text_btn.addEventListener("click", ()=>{
        register_box.style.transform = "translateX(0px)";
        login_box.style.transform = "translateX(-400px)";
        box.style.height = "490px";
        text.innerHTML = "Miskat: 'Click on the Register button.'"
    })
    login_text_btn.addEventListener("click", ()=>{
        register_box.style.transform = "translateX(400px)";
        login_box.style.transform = "translateX(0px)";
        box.style.height = "440px";
        text.innerHTML = "Miskat: 'Now click on the Register link.'"
    })
};
loginButton();
loginPopUpBoxShow();
boxMoveing();