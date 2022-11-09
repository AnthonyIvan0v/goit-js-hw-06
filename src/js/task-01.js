
const itemLiRef =  document.querySelectorAll( '.item');

console.log(`Number of categories: ${itemLiRef.length}`)

itemLiRef.forEach(elem => {
    console.log(`Category: ${elem.firstElementChild.textContent} 
Elements: ${elem.querySelectorAll('li').length}`);
    })





