function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
input: document.querySelector('input'),
buttonCreate: document.querySelector('[data-create]'),
buttonDestroy: document.querySelector('[data-destroy]'),
divBox: document.querySelector('#boxes'),
}



refs.buttonCreate.addEventListener('click', createBox);
refs.buttonDestroy.addEventListener('click', destroyBoxes);


function createBox(inputValue){
    inputValue = Number(refs.input.value);
      for (let i = 0; i < inputValue; i+=1) {
      let sizeBox = 30+ i * 10;
      refs.divBox.insertAdjacentHTML('afterbegin', `<div style="background-color: ${getRandomHexColor()}; height: ${sizeBox}px; width: ${sizeBox}px"></div>`)
     }  
}

function destroyBoxes(){
  refs.divBox.innerHTML = '';
  refs.input.value = '';
}








//   for (let i = 0; i < amount; i+=1) {
//     let sizeBox = 30+ i * 10;
//   return divBox.insertAdjacentHTML('afterbegin', ()=>{`<div style="height: ${sizeBox}px; width: ${sizeBox}px"></div>`})
// }
// }




