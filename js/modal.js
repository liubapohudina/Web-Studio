(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
      scrollToTopButton: document.getElementById('myBtn'),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("modal-open");
    }

/*------------------------scroll top---------------------*/
  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      refs.scrollToTopButton.style.display = "block";
  } else {
    refs.scrollToTopButton.style.display = "none";
  }
}


function scrollToTop() {
  //const scrollToTopButton = document.getElementById('myBtn'); 
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// const scrollToTopButton = document.getElementById('myBtn');
// console.log(scrollToTopButton)
  refs.scrollToTopButton.addEventListener('click', scrollToTop);
})();