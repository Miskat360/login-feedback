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
        text.innerHTML = "Miskat: 'Please click on the login button. And you can also cleck password show & hide process.'"
    })
}
function boxMoveing(){
    var login_box = document.querySelector(".login-box");
    var register_box = document.querySelector(".register-box");
    var register_text_btn = document.querySelector("#register-text-btn");
    var login_text_btn = document.querySelector("#login-text-btn");
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
// function eyeOnOffDemo(){
//     var password_inputs = document.querySelectorAll(".password-input");
//     var password_icons = document.querySelectorAll(".password-icon img");
//     Array.from(password_icons).map((icon)=>{
//         icon.addEventListener("click", ()=>{
//             Array.from(password_inputs).map((input) =>{
//                 if(input.type == "password"){
//                     input.type = "text";
//                     icon.src = "images/eye-fill.png";
//                 }else{
//                     input.type = "password";
//                     icon.src = "images/eye-off-fill.png";
//                 }
//             })
//         });
//     })
// }
function eyeOnOff(){
    var eye_icon_login = document.querySelector("#login-password-icon i");
    var input_password_login = document.querySelector("#login-password-input");
    eye_icon_login.addEventListener("click", ()=>{
        if(input_password_login.type == "password"){
            input_password_login.type = "text";
            eye_icon_login.classList = "ri-eye-fill"
        }else{
            input_password_login.type = "password";
            eye_icon_login.classList = "ri-eye-off-fill"
        }
    })
    var eye_icon_register = document.querySelector("#register-password-icon i");
    var input_password_register = document.querySelector("#register-password-input");
    eye_icon_register.addEventListener("click", ()=>{
        if(input_password_register.type == "password"){
            input_password_register.type = "text";
            eye_icon_register.classList = "ri-eye-fill"
        }else{
            input_password_register.type = "password";
            eye_icon_register.classList = "ri-eye-off-fill"
        }
    })
}
loginButton();
loginPopUpBoxShow();
boxMoveing();
eyeOnOff();