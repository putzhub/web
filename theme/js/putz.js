/* -- ACCORDION -- */
$( document ).ready(function() {
    initialize_accordion();
});

function initialize_accordion (){
    //only used for navigation, but written to be portable for future uses too
    
    var accordions = document.getElementsByClassName("accordion");
    
    for (let i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener("click", function() {
            //button
            active = this.classList.toggle("accordion-active");
            this.innerText = active ? "[ - ]" : "[ + ]";
            //receiver
            const panel = this.nextElementSibling;
            panel.classList.toggle("panel-active");
        });
    }
}
/* --flashy splash screen idea
class Point {
    constructor(maxwidth, maxheight){
        this.x = Math.round(Math.random() * maxwidth);
        this.y = Math.round(Math.random() * maxheight);
        this.color = "white";
    }
    move(){
        this.x
    }
}


window.onload = function (){
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    canvas.style.width = "100%";
    canvas.style.height = "100%";

    let stars = [];
    stars.length = 100;

    for(i = 0; i < stars.length; i++){
        let star = stars[i] = new Point(canvas.width, canvas.height);
        context.fillStyle = star.color;
        context.fillRect(star.x, star.y, 1, 1)
    }

    console.log(canvas.width, canvas.height);
};

function draw_splash(){

}
*/