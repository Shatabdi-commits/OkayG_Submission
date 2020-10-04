const addModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];
const startAddApplicantButton = document.querySelector('#apply');
// const startAddMovieButton = document.querySelector('header').lastElementChild;
const backdrop = document.getElementById('backdrop');
// const backdrop = document.body.firstElementChild;
const cancelAddApplicantButton = addModal.querySelector('#cancel');
const confirmAddApplicantButton = addModal.querySelector('#add');
const userInputs = addModal.querySelectorAll('input');
// const userInputs = addMovieModal.getElementsByTagName('input');


const entries = [];





const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const toggleApplicantModal = () => {
  // function() {}
  addModal.classList.toggle('visible');
  toggleBackdrop();
};

const clearApplicantInput = () => {
  for (const usrInput of userInputs) {
    usrInput.value = '';
  }
};

const cancelAddApplicantHandler = () => {
  toggleApplicantModal();
  clearApplicantInput();
};

const addApplicantHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;
  
    if (
      titleValue.trim() === '' ||
      imageUrlValue.trim() === '' ||
      ratingValue.trim() === '' ||
      +ratingValue < 1 ||
      +ratingValue > 5
    ) {
      alert('Please enter a standard between 1 to 5');
      return;
    }
  


  const newApplicant = {
    title: titleValue,
    phone:phoneNolValue,
   standard: standardValue
  };

  entries.push(newApplicant);
  console.log(entries);
  toggleApplicantModal();
  clearApplicantInput();

};

const backdropClickHandler = () => {
  toggleApplicantModal();
};
startAddApplicantButton.addEventListener('click', toggleApplicantModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddApplicantButton.addEventListener('click', cancelAddApplicantHandler);
confirmAddApplicantButton.addEventListener('click', addApplicantHandler);


//Animation
function myMove() {
    var elem = document.getElementById("myAnimation");   
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (pos == 300) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + 'px'; 
        elem.style.left = pos + 'px'; 
      }
    }
   

  }
  function myMove1() {
    var elem = document.getElementById("myLastAnimation");   
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (pos == 450) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + 'px'; 
        elem.style.left = pos + 'px'; 
      }
    }
  }
  




