let input = prompt('1$ or mystery box', '');
let result = prompt.value;
module.exports = result;

let body = document.querySelector('body');
let link = document.createElement('a');
link.setAttribute('src', `./${input}.txt`);
body.appendChild(link);
