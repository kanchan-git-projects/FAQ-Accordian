const minusIcon = document.querySelector(".faqs .minus");
const answer = document.querySelector(".faqs:first-child .answer");

minusIcon.addEventListener("click", function () {
  answer.classList.toggle("hidden");

  if (minusIcon.alt === "minus-icon") {
    minusIcon.src = "./Images/icon-plus.svg";
    minusIcon.alt = "plus-icon";
  } else {
    minusIcon.src = "./Images/icon-minus.svg";
    minusIcon.alt = "minus-icon";
  }
});

const plusIcon = document.querySelectorAll(".faqs .plus");
const hiddenAnswer = document.querySelectorAll(".faqs .hidden");

plusIcon.forEach((plusIcon) => {
  plusIcon.addEventListener("click", function () {
    const hiddenAnswer = plusIcon.parentElement.nextElementSibling;

    hiddenAnswer.classList.toggle("hidden");

    if (plusIcon.alt === "plus-icon") {
      plusIcon.src = "./Images/icon-minus.svg";
      plusIcon.alt = "minus-icon";
    } else {
      plusIcon.src = "./Images/icon-plus.svg";
      plusIcon.alt = "plus-icon";
    }
  });
});
