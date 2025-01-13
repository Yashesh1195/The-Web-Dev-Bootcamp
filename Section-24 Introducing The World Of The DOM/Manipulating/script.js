//=========
//innerText
//=========
// The innerText property of the HTMLElement interface represents the rendered text content of a node and its descendants.

// document.querySelector("p").innerText;
// document.querySelector("p").innerText = "lolololol";

// const allLinks = document.querySelectorAll('a');

// for(let link of allLinks){
//     link.innerText = "I am a link!!!";
// }

// document.querySelector('h1').innerText = "<i>fdsvafdgfhg</i>"


//===========
//textContent
//===========
// The textContent property of the Node interface represents the text content of the node and its descendants.

// document.querySelector("p").textContent;


//=========
//innerHTML
//=========
// The Element property innerHTML gets or sets the HTML or XML markup contained within the element.

// document.querySelector('p').innerHTML;

// document.querySelector('h1').innerHTML = "<i>fdsvafdgfhg</i>"

// document.querySelector('h1').innerHTML += "<sup>gbuhfxasjk</sup>";


// ==============================
//getAttribute() & setAttribute()
// ==============================

// const firstLink = document.querySelector('a');

// firstLink.href;
// firstLink.getAttribute("href");
// firstLink.getAttribute("id")

// firstLink.setAttribute("href", "http://www.google.com")

// const input = document.querySelector("input[type = 'text']");
// input.setAttribute("type", "password");

// second commit 

const h1 = document.querySelector('h1');
// h1.style.color;

const allLinks = document.querySelectorAll('a');

// for(let link of allLinks){
//     link.style.color = 'rgb(13, 123, 190)';
//     link.style.textDecorationColor = "magenta";
//     link.style.textDecorationStyle = "wavy";
// }


//Class List
// The classList property returns the CSS classnames of an element.

// The classList property returns a DOMTokenList.

// const h2 = document.querySelector('h2');
// h2.getAttribute('class');
// h2.setAttribute('class', 'purple');
// h2.setAttribute('class', 'border');
// let currentClasses = h2.getAttribute('class');
// currentClasses;
// h2.setAttribute('class', `${currentClasses} purple`);

// const h2 = document.querySelector('h2');
// h2.classList;
// h2.classList.add('purple');
// h2.classList.add('border');
// h2.classList.remove('border');
// h2.classList.contains('border');
// h2.classList.contains('purple');
// h2.classList.toggle('purple');

//Traversing Parent/Child/Sibling
//Parent
// const firstBold = document.querySelector('b');
// firstBold;
// firstBold.parentElement.parentElement;
// firstBold.parentElement.parentElement.parentElement;
// firstBold.parentElement.parentElement.parentElement.parentElement;
// firstBold.parentElement.parentElement.parentElement;

//Child
// const paragraph = firstBold.parentElement;
// paragraph;
// paragraph.childElementCount;
// paragraph.children;
// paragraph.children[0];
// paragraph.children[5];
// paragraph.children[5].parentElement;

//Sibling
// const squareImg = document.querySelector('.square');
// squareImg.parentElement;
// squareImg.children;
// squareImg;
// squareImg.nextSibling;
// squareImg.previousSibling;
// squareImg.nextElementSibling;
// squareImg.previousElementSibling;

//=====================
// Append & AppendChild
//=====================

// document.createElement('img')
// <img>​
// const newImg =  document.createElement('img');
// undefined
// console.dir(newImg);
// newImg.src = "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D";

// document.body.appendChild(newImg);

// newImg.classList.add('square')
// const new3 = document.createElement('h3');

// new3;

// new3.innerText = "I am new!!!";

// document.body.appendChild(new3);

// const p = document.querySelector('p');

// p.append("I am new text!!!!!!");

// p.append("I am new text!!!!!!", "qwertyuiopasdfghjklzxcvbnm");

// const newB = document.createElement("b");

// newB.append("I am new Bold Tag");
// newB

// newB.prepend("I am new Bold Tag");

// p.prepend(newB)

// p.append(newB)

// p.prepend(newB)

// const h2 = document.createElement('h2');
// h2.append('Are Addorabe Chickens');
// h2
// const h1 = document.querySelector('h1');
// const ah1 = document.querySelector('h1');
//  ah1.insertAdjacentElement('afterend', h2);
// h1.nextElementSibling
// const h3 = ocument.createElement('h3');
// const h3 = document.createElement('h3');
// h3.innerText("I am h3");
// h3.innerText="I am h3";
// ah1.after(h3)
// h1.nextElementSibling
// h1.nextElementSibling

//====================
//removeChild & remove
//====================

// const firstLi = document.querySelector('li');
// firstLi
// const ul = firstLi.parentElement
// ul
// ul.removeChild(firstLi);
// const b=document.querySelector('b');
// b.parentElement.removeChild(b);
// const img = document.querySelector('img');
// img.remove();
// img.parentElement.removeChild(img);

