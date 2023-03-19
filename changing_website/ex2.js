// les éléments a manipuler dans le fichier js

const x=document.querySelector("#couleur");
const t=document.querySelector("#test");
const y=document.querySelector("#taille");
const z=document.querySelector("#police");

//event listener qui vont declencher les changements:

x.addEventListener("change",function(){
    t.style.color=x.value;
});
y.addEventListener("input",function(){
    t.style.fontSize = y.value +'px';
});
z.addEventListener("change",function(){
    t.style.fontFamily=z.value;
});