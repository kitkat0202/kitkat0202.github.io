$(function() {
    // make navebar fixed when navbar is at the top
    window.onscroll = function() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky")
        }
    }

    var navbar = document.querySelector(".navbar")
    var sticky = navbar.offsetTop
})