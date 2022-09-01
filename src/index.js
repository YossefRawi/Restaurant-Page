import './style.css';
import food from'./images.jpg';


const divContent = document.getElementById('content')


console.log(divContent)


const myIcon = new Image();
myIcon.src = food;

document.body.appendChild(myIcon)