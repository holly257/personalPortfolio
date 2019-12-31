$(".dropbtn").on("click", function () {
    document.getElementById("myDropdown").classList.toggle("show");
})

$("#dropdown-list").on("click", function () {
    document.getElementsByClassName("dropList").classList.toggle("hover");
})