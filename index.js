function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


//debug later
window.onclick = function(event) {
    if(!event.target.matches(".dropbtn")) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")){
                openDropdown.classList.remove("show");
                console.log('removing');
            }
        }
    }
}
// $(function($){
//     $(".menuBtn").click(function(){
//         $(".responsive-menu").toggleClass("expand")
//     })
// })