const searchInput = document.getElementById("searchInput");


searchInput.addEventListener("keyup", function(event){
    let search = event.target.value.toLowerCase();
    let allProjects = document.getElementsByClassName("project")
    for (let counter = 0; counter < allProjects.length; counter++){
        const currentItem = allProjects[counter].textContent.toLowerCase()
        if (currentItem.includes(search)) {
            allProjects[counter].style.display = "block"
        } else {
            allProjects[counter].style.display = "none"
        }
    }
});
