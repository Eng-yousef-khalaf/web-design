const more = document.getElementById("more");
const ul = document.getElementById("ul");;

const li1 = document.getElementById("li1");
const li2 = document.getElementById("li2");
const li3 = document.getElementById("li3");
const li4 = document.getElementById("li4");


const newli1 = document.createElement("li");
const newli2 = document.createElement("li");
const newli3 = document.createElement("li");
const newli4 = document.createElement("li");

newli1.classList.add("php2");
newli2.classList.add("php2");
newli3.classList.add("php2");
newli4.classList.add("php2");

newli1.innerHTML = li1.innerHTML;
newli2.innerHTML = li2.innerHTML;
newli3.innerHTML = li3.innerHTML;
newli4.innerHTML = li4.innerHTML;

newli1.querySelector(".php").setAttribute('src', '../images/list/atom.png');
newli2.querySelector(".php").setAttribute('src', '../images/list/html-5.png');
newli3.querySelector(".php").setAttribute('src', '../images/list/css.png');
newli4.querySelector(".php").setAttribute('src', '../images/list/java-logo.png');

newli1.querySelector(".php").classList.add("new");
newli2.querySelector(".php").classList.add("new");
newli3.querySelector(".php").classList.add("new");
newli4.querySelector(".php").classList.add("new");


newli3.querySelector(".php").classList.add("css");



const pressMoreHandler = ()=>{
    ul.appendChild(newli1);
    ul.appendChild(newli2);
    ul.appendChild(newli3);
    ul.appendChild(newli4);

    more.style.display = "none";
};

more.addEventListener("click",pressMoreHandler )


const nav = document.getElementById("nav_container");

const loadHandler = () =>{
    nav.classList.add("loaded");
};