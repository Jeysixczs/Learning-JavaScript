// change color of the text in the paragraph with id 'changecolors' to red

const texts = document.getElementById('changecolors');
// change the properties of the text
texts.style.color = 'red';
texts.style.backgroundColor = 'yellow';
texts.style.textAlign = 'center';
texts.style.fontSize = '30px';
texts.style.margin = '20px';
texts.style.padding = '10px';

// add class list using classlist.add

const listclass = document.getElementById('lister');

listclass.classList.add('list');

const newlist = document.getElementsByClassName(listclass.className);

newlist[0].style.color = 'blue';

// remove class list using classlist.remove

listclass.classList.remove('list');

console.log(listclass.classList);//successfully removed the class list