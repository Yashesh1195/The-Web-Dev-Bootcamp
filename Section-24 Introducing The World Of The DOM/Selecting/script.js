//===========================
// document.getElementById();
//===========================

// const banner = document.getElementById("banner");
// const toc = document.getElementById("toc");

//=================================
// document.getElementsByTagName();
//=================================

// const allImages = document.getElementsByTagName('img');

// for(let img of allImages){
//     // console.log(img.src);
//     img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg"
// }

//===================================
// document.getElementsByClassName();
//===================================

// const squareImages = document.getElementsByClassName('square');

// for(let img of squareImages){
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }

//=============================
// document.querySelectorAll();
//=============================

// const query = document.querySelector('p');
const query = document.querySelectorAll('p, a');

const links = document.querySelectorAll('p a');

for(let link of links){
    console.log(link.href);
}