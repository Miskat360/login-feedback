var myN = 0;
function loginButton(){
    var btn = document.querySelector("#main-btn");
    var box = document.querySelector("#box");
    btn.addEventListener("click", () => {
        if(myN == 0){
            box.style.transform = "scale(1)"
            myN = 1;
        }else{
            box.style.transform = "scale(0)"
            myN = 0;
        }
    })
}
function loginPopUpBoxShow(){
    var btn = document.querySelector("#submit-btn");
    var section1 = document.querySelector("#section-1");
    var nav = document.querySelector("nav");
    var box = document.querySelector("#box");
    var thank_box_row = document.querySelector(".thank-box-row");
    var close_box_btn = document.querySelector("#close-box-btn");
    btn.addEventListener("click", ()=>{
        section1.classList.add("section1-change-bg");
        nav.style.display = "none";
        box.style.display = "none";
        thank_box_row.style.top = "50%";
        thank_box_row.style.transform = "translate(-50%, -50%) scale(1)"
    });
    close_box_btn.addEventListener("click", ()=>{
        thank_box_row.style.top = "-22%";
        thank_box_row.style.transform = "translate(-50%, -50%) scale(0)";
        section1.classList.remove("section1-change-bg");
        box.style.display = "block";
        box.style.transform = "scale(0)"
        nav.style.display = "flex";
        myN = 0;
    })
}
loginButton();
loginPopUpBoxShow();