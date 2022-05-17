const paragraph = document.createElement('p');
const h1 = document.createElement('h1');

h1.textContent = "Cool text!";

paragraph.innerHTML = "My text is bold <em>Raimonds</em> text"


document.body.appendChild(h1);

//select parent node
const itemList = document.querySelector('ul');
const item = document.createElement('li');

let uId = document.getElementsByClassName('ul');
console.log(uId);
//
const itemWithId = document.getElementById('last');
const itemFirstId = document.getElementById('first');
item.textContent = "Water plants";

itemList.insertBefore(item, itemWithId)
itemList.removeChild(itemList.lastElementChild);
itemList.removeChild(itemFirstId);

console.log(h1);
console.log(paragraph);