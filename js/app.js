// /*
//   Change figures of button after click
// */

const burgerBtn = document.querySelectorAll(".burger-btn");
Array.from(burgerBtn, elem => elem.addEventListener("click", toggleClasses));

function toggleClasses(event) {
  if (event.target.classList.contains(".burger-btn")) {
    toggleClass(event.target);
  } else {
    toggleClass(event.target.parentNode);
  }
}

function toggleClass(elem) {
  elem
    .querySelector(".burger-btn__top")
    .classList.toggle("burger-btn__top--click");
  elem
    .querySelector(".burger-btn__center")
    .classList.toggle("burger-btn__center--click");
  elem
    .querySelector(".burger-btn__bottom")
    .classList.toggle("burger-btn__bottom--click");
}


// class="img_answer" 
  /* Code не связан с особенностями реализации кнопки */
  const offBtn = document.querySelector("#hideOff");
  const offBtn0 = document.querySelector("#hideOff-0");
  const offBtn2 = document.querySelector("#hideOff-2");
  const imgAnswer = document.querySelector(".img-answer");
  const imgAnswer0 = document.querySelector(".img-answer-0");
  const imgAnswer2 = document.querySelector(".img-answer-2");
  offBtn.addEventListener('click', hideOff, false)
  offBtn0.addEventListener('click', hideOff0, false)
  offBtn2.addEventListener('click', hideOff2, false)

  function hideOff (event) {
    imgAnswer.classList.toggle('hide')
  }
 
  function hideOff0 (event) {
    imgAnswer0.classList.toggle('hide')
  }
 
  function hideOff2 (event) {
    imgAnswer2.classList.toggle('hide')
  }
 