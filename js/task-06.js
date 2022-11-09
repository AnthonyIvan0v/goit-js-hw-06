
const inputRef = document.querySelector( '#validation-input')


function check (event){
    if(event.currentTarget.value.length === Number(inputRef.getAttribute('data-length'))){
        inputRef.classList.contains('invalid') ? inputRef.classList.replace('invalid', 'valid') : inputRef.classList.add('valid');
    } else {
        inputRef.classList.contains('valid') ? inputRef.classList.replace('valid', 'invalid') : inputRef.classList.add('invalid');
        }
};


inputRef.addEventListener('blur', check );
