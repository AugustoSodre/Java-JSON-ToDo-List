// Initial footer render
document.addEventListener("DOMContentLoaded", function() {
    let date = new Date()
    let footerElem = document.getElementById("footer_paragraph")
    if (footerElem) {
        footerElem.innerText = date.getFullYear() + " ©"
    }
})