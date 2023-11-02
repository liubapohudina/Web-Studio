const arrayCards = document.querySelectorAll(".card");
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});

function handleClick(event) {
  const buttonTxt = event.currentTarget.textContent.trim().toLowerCase(); 
  console.log(buttonTxt);

  arrayCards.forEach((card) => {
    const text = card.querySelector(".title-text");
    const txt = text.textContent.trim().toLowerCase();
    const parentCard = card.closest('.item');
    //console.log(parentCard)
    if (buttonTxt !== "all" && buttonTxt !== txt)
    //(buttonTxt === "all" || buttonTxt === txt)
    {
      parentCard.style.display = "none";
      //parentCard.style.display = "block";
    } else {
      parentCard.style.display = "block";
      //parentCard.style.display = "none";
    }
  });
}





