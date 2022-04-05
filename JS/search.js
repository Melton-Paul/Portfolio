const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keyup", function(event){
    let search = event.target.value.toLowerCase();
    console.log(search);
});