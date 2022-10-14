import React from "react";
import "../src/style.css";

class App extends React.Component {
    render (){
        return(
            <div>
                <Header/>
                <Caroulse/>
                
                
            </div>
        )
    };
};

class Header extends React.Component{
    render(){
        return(
            <header>
        <div class="logo">
            <a href="../index.html" class="logo nav-link">
                <img class="logoC" src="../public/img/destiny-2.png" alt="logotipo" />
            </a>
        </div>
        <nav id="menu">
            <ul>
                <li><a href="../index.html">Inicio</a></li>
                <li><a href="../public/products.html">Productos</a></li>
                <li><a href="#Seccion2">About</a></li> 
                
                <button type="button" class="inicio btn btn-light">Iniciar Sersion</button>
                <button type="button" class="register btn btn-warning">Registrarse</button>
                
            </ul>
        </nav>
        <button class="nav-toggle">
            <i class="fas fa-align-justify"></i>

        </button>
    </header>
        )
    };
};

class Caroulse extends React.Component{
  render(){
    return(
        <div class="banner">
		<div class="banner-content">
			<h1 class="tittle">BIENVENIDOS A EVERVERSO 2.0</h1>
            <a class="subtittle" href="../public/products.html">Ver Productos</a>
			
		</div>
	</div>
    
    )};
};



ReactDOM.render(
    <App/>,
  document.getElementById('root')
);

// Header
let menuToggle = document.querySelector('.nav-toggle');
let menuToggleIcon = document.querySelector('.nav-toggle i');
let menu = document.getElementById('menu');

menuToggle.addEventListener('click', e=> {
    menu.classList.toggle('show');
    
    if(menu.classList.contains('show')){
        menuToggleIcon.setAttribute('class', 'fa fa-times');
    }else{
        menuToggleIcon.setAttribute('class', 'fa fa-bars');
    }
});

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});