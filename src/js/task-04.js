const refs = {
Value: document.querySelector('#value'),
decrement: document.querySelector('button[data-action="decrement"]'),
increment: document.querySelector('button[data-action="increment"]'),
};

let counterValue = 0;

const handleDecrement = ()=>{
    refs.Value.textContent = counterValue -= 1 ;
}
const handleIncrement = ()=>{
    refs.Value.textContent = counterValue += 1;
}

refs.decrement.addEventListener('click', handleDecrement);
refs.increment.addEventListener('click', handleIncrement);