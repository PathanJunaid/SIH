function herosection(val){
    var images = document.querySelector(".images").children;
    var button = document.querySelector(".hero-buttons").children;
    var content = document.querySelectorAll(".login-types");
    for(let i=0;i<images.length;i++){
        if(i===val){
            content[i].classList.remove("hide-section");
            content[i].classList.add("show-section");
            images[i].classList.remove("hide-section");
            images[i].classList.add("show-section");
            button[i].classList.add("bottom-border-show");
            button[i].classList.remove("bottom-border-hide");
        }
        else{
            content[i].classList.remove("show-section");
            content[i].classList.add("hide-section");
            images[i].classList.remove("show-section");
            images[i].classList.add("hide-section");
            button[i].classList.remove("bottom-border-show");
            button[i].classList.add("bottom-border-hide");
        }
        
    }
}