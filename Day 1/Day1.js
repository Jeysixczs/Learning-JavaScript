// Select Elements from ID
 
// unique ID
// the tagname is not required when using getElementById
// it will return a single element, so we can access it directly

const myid = document.getElementById('idIT');
console.log(myid.innerText); // This is the first paragraph that have an id of "idIT
console.log(myid.tagName); // p




// Select Elements from Class

// multiple classes
// if same class is used multiple times, it will return a collection of elements like an array
// so we can access them using index like myclass[0], myclass[1], etc.

const myclass = document.getElementsByClassName('classIT');
console.log(myclass[0].innerText); // This is the first paragraph that have a class of "classIT"
console.log(myclass[0].tagName); // p
console.log(myclass[1].innerText); // This is the second paragraph that have a class of "classIT"


// Select Elements from Tag Name

// multiple tags
// if same tag is used multiple times, it will return a collection of elements like an array

const mytag = document.getElementsByTagName('p');
console.log(mytag[0].innerText); // This is the first paragraph that have an id of "idIT"
console.log(mytag[0].tagName); // p
console.log(mytag[1].innerText); // This is the first paragraph that have a class of "classIT"


// Select Elements from Query Selector

// querySelectorAll will return a collection of elements like an array

// get class using dot (.)
// get id using hash (#)
const myquery = document.querySelectorAll('.classIT');
const myquery2 = document.querySelectorAll('#idIT');

console.log(myquery[0].innerText); // This is the first paragraph that have a class of "classIT"
console.log(myquery[0].tagName); // p
console.log(myquery[1].innerText); // This is the second paragraph that have a

// class of "classIT"
console.log(myquery2[0].innerText); // This is the first paragraph that have an id of "idIT"
console.log(myquery2[0].tagName); // p
console.log(myquery2[0].className); // classIT

// Select Elements from Query Selector All
// querySelectorAll will return a collection of elements like an array
// get all paragraphs using querySelectorAll

const myqueryAll = document.querySelectorAll('p');
console.log(myqueryAll[0].innerText); // This is the first paragraph that have
console.log(myqueryAll[0].tagName); // p
console.log(myqueryAll[1].innerText); // This is the first paragraph that have a class of "classIT
console.log(myqueryAll[2].innerText); // This is the second paragraph that have a class of "classIT
console.log(myqueryAll[3].innerText); // This is the third paragraph that have a class of "classIT
console.log(myqueryAll[4].innerText); // This is the fourth paragraph that have a class of "classIT

