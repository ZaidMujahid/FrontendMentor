const quote = document.querySelector("h1")
const quoteNo = document.querySelector("p span")
// const submitBtn = document.querySelector("button")

const fetchFromAPI = async ()=> {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()
    quote.innerHTML = `"${data.slip.advice}"`
    quoteNo.innerHTML = data.slip.id
}
fetchFromAPI()

// submitBtn.addEventListener("click", ()=>{
//     fetchFromAPI()
// })