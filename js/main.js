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

    if (buttonTxt === "all" || buttonTxt === txt) {
      parentCard.style.display = "block";
      //card.style.display = "block";
    } else {
      parentCard.style.display = "none";
      card.style.display = "none";
    }
  });
}





