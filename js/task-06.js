const refs = {
    input: document.querySelector('#validation-input'), 
};

const inputLength = refs.input.getAttribute('data-length');

const inputValidation = () => {
    
      if (refs.input.value.length === Number(inputLength)) {
          refs.input.classList.add('valid');
          refs.input.classList.remove('invalid');
    } else {
          refs.input.classList.add('invalid');
    };
};

refs.input.addEventListener('blur', inputValidation);
