const adviceTitle = document.querySelector(".content-advice__title"),
adviceDescription = document.querySelector(".content-advice__description"),
btnDice = document.querySelector(".dice")
;

async function adviceApi(){

    const response = await fetch("https://api.adviceslip.com/advice")
    const data = await response.json()
    return data;
}

btnDice.addEventListener("click", async ()=>{

    data = await adviceApi();
    adviceTitle.textContent = `ADVICE #${data.slip.id}`
    adviceDescription.textContent = data.slip.advice
})