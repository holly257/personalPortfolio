$(".dropbtn").on("click", function () {
    document.getElementById("myDropdown").classList.toggle("show");
})

$("#dropdown-list").on("click", "li", function () {
    this.classList.toggle("hover");
})

// can't get mouseenter to work but click works 