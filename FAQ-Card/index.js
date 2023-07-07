const showButton = document.querySelectorAll(".ques");

showButton.forEach(button => {
    button.addEventListener("click", () => {
        if(button.nextElementSibling.classList.contains("hidden")){
            showButton.forEach(button => button.nextElementSibling.classList.add("hidden"))
            button.nextElementSibling.classList.remove("hidden")
        }else{
            button.nextElementSibling.classList.add("hidden")
        }
    })
})