const h2 = document.createElement('h2');
h2.textContent = "by benjamin olmsted";
document.querySelector('body').appendChild(h2);
let nPara = 0;
const paras = document.querySelectorAll('p');

document.addEventListener("click", function(event) {
    console.log(event);
    if(nPara < paras.length){ 
     removeParagraph(nPara);
     nPara++; 
    }
    }); 

function removeParagraph(n){
    console.log("our paragraph is ", paras[n]);
    paras[n].style.visibility = 'hidden';
}