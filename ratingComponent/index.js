const mainCointainer = document.querySelector(".container")
const tyCointainer = document.querySelector(".ty-container")
const submitButton = document.querySelector(".btn")
const rating = document.querySelectorAll(".rate");
const rated = document.querySelector(".rated");

rating.forEach((rate) => {
    rate.addEventListener("click", () => {
        rated.textContent = rate.innerHTML
    })
})

submitButton.addEventListener("click", ()=>{
    if(rated.innerHTML){
        tyCointainer.classList.remove("hidden")
        mainCointainer.classList.add("hidden")
    }else{
        alert("Please select a rating first!")
    }
})