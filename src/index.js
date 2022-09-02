import './style.css';
import food from'./images.jpg';


const divContent = document.getElementById('content')


console.log(divContent)

//Header
const header = document.createElement('h1');
header.classList.add('header');
header.innerText = "Scriptaurant";
divContent.appendChild(header);


//Home image
const myIcon = new Image();
myIcon.classList.add('foodpic')
myIcon.src = food;
divContent.appendChild(myIcon);

//dummy Text for home page
const dummyText = document.createElement('div');
dummyText.classList.add('dummy');
dummyText.innerText = 'Best pizza ever made';
divContent.appendChild(dummyText);


document.body.appendChild(divContent)