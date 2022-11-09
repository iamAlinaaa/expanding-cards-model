// vanilla JS
const panels = document.querySelectorAll(".panel");

// one more version of "for loop" 
panels.forEach(function(panel) {
    panel.addEventListener("click", function () {
        removeActiveClasses();
        panel.classList.add("active");
    });
});

function removeActiveClasses() {
    panels.forEach(function(pan){
        pan.classList.remove("active");
    });
}