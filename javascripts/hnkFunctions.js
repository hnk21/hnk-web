// Scroll to top function
var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
var rootElement = document.documentElement

scrollToTopBtn.classList.remove("showBtn")

function handleScroll() {
    // Do something on scroll
    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
    if ((rootElement.scrollTop / scrollTotal) > 0.1) { // Show button
    scrollToTopBtn.classList.add("showBtn")
    } 
    // Hide button
    else {
    scrollToTopBtn.classList.remove("showBtn")
    }
}

// Scroll to top logic
function scrollToTop() {
    rootElement.scrollTo({top: 0, behavior: "smooth"})
}

scrollToTopBtn.addEventListener("click", scrollToTop)
document.addEventListener("scroll", handleScroll)