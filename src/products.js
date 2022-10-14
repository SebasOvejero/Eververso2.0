class App extends React.Component {
    render (){
        return(
            <div>
                <Header/>
                <Product/>
                
                
                
            </div>
        )
    };
};

class Header extends React.Component{
    render(){
        return(
            <header>
        <div class="logo">
            <a href="../public/index.html" class="logo nav-link">
                <img class="logoC" src="../public/img/destiny-2.png" alt="logotipo" />
            </a>
        </div>
        <nav id="menu">
            <ul>
                <li><a href="../public/index.html">Inicio</a></li>
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

class Product extends React.Component {
    render (){
        return(

    
<div class="album py-5 bg-light">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="300" src="https://cdn.shopify.com/s/files/1/0417/0233/products/MicrosoftTeams-image_5_large.jpg?v=1623949547" alt=""
    srcset="" />

            <div class="card-body">
              <p class="card-text">PREORDER: DESTINY TOASTER</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-success">Comprar</button>
                  <button type="button" class="btn btn-sm btn-outline-warning">Añadir</button>
                </div>
                <small class="text-muted">$84.99</small>
                <span class="checked fa fa-star "></span>
                <span class="checked fa fa-star "></span>
                <span class="checked fa fa-star "></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="300" src="https://cdn.shopify.com/s/files/1/0417/0233/products/Europa_Hoodie_01_1000x1000_0e6f48e8-2332-49ac-9a2c-dbbd67b81e1d_large.jpg?v=1617748404" alt=""
    srcset="" />

            <div class="card-body">
              <p class="card-text">EUROPA TECH HOODIE BY ARK/8</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-success">Comprar</button>
                  <button type="button" class="btn btn-sm btn-outline-warning">Añadir</button>
                </div> 
                <small class="text-muted">$84.99</small>
                <span class="checked fa fa-star "></span>
                <span class="checked fa fa-star "></span>
                <span class="checked fa fa-star "></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
           <img class="bd-placeholder-img card-img-top" width="100%" height="300" src="https://cdn.shopify.com/s/files/1/0417/0233/products/Europa_Backpack_01_1000x1000_ce856832-5dbf-473e-be47-54c06386ee46_large.jpg?v=1617748770" alt=""
    srcset="" />

            <div class="card-body">
              <p class="card-text">EUROPA INDUSTRIAL BACKPACK ARK/8</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-success">Comprar</button>
                  <button type="button" class="btn btn-sm btn-outline-warning">Añadir</button>
                </div>
                <small class="text-muted">$144.99</small>
                <span class="checked fa fa-star "></span>
                <span class="checked fa fa-star "></span>
                <span class="checked fa fa-star "></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="300" src="https://cdn.shopify.com/s/files/1/0417/0233/products/VOG_Jacket_Dual_1000x1000_e5036aa8-af7c-4576-8b9c-cd8d014b0fb5_large.jpg?v=1620080285" alt=""
    srcset="" />

            <div class="card-body">
              <p class="card-text">PREORDER: BUNGIE REWARDS 2021 VAULT OF GLASS RAID JACKET</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-success">Comprar</button>
                  <button type="button" class="btn btn-sm btn-outline-warning">Añadir</button>
                </div>
                <small class="text-muted">$89.99</small>
                <span class="checked fa fa-star "></span>
                <span class="checked fa fa-star "></span>
                <span class="checked fa fa-star "></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="300" src="https://cdn.shopify.com/s/files/1/0417/0233/products/VoG_Ring_01_1000x1000_80307bcb-6ab1-4fc4-b1ad-cb544e225f53_large.jpg?v=1621291631" alt=""
    srcset="" />

            <div class="card-body">
              <p class="card-text">PREORDER: BUNGIE REWARDS 2021 VAULT OF GLASS RAID RING</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-success">Comprar</button>
                  <button type="button" class="btn btn-sm btn-outline-warning">Añadir</button>
                </div>
                <small class="text-muted">$56.99</small>
                <span class="checked fa fa-star "></span>
                <span class="checked fa fa-star "></span>
                <span class="checked fa fa-star "></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="300" src="https://cdn.shopify.com/s/files/1/0417/0233/products/Fatebreaker_Box_1000x1000_31a1ad05-e3a8-45f8-bab8-3ca86d8e0bfe_large.jpg?v=1620081584" alt=""
    srcset="" />

            <div class="card-body">
              <p class="card-text">PREORDER: BUNGIE REWARDS - FATEBREAKER SEAL COLLECTIBLE</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-success">Comprar</button>
                  <button type="button" class="btn btn-sm btn-outline-warning">Añadir</button>
                </div>
                <small class="text-muted">$49.99</small>
                <span class="checked fa fa-star "></span>
                <span class="checked fa fa-star "></span>
                <span class="checked fa fa-star "></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="300" src="https://cdn.shopify.com/s/files/1/0417/0233/products/Guardian_Journal_03_1000x1000_254f3bb0-8236-42be-85ba-dc64d9ecac0a_large.jpg?v=1611187522" alt=""
    srcset="" />

            <div class="card-body">
              <p class="card-text">DESTINY GUARDIAN'S JOURNAL</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-success">Comprar</button>
                  <button type="button" class="btn btn-sm btn-outline-warning">Añadir</button>
                </div>
                <small class="text-muted">$67.99</small>
                <span class="checked fa fa-star "></span>
                <span class="checked fa fa-star "></span>
                <span class="checked fa fa-star "></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="300" src="https://cdn.shopify.com/s/files/1/0417/0233/products/Pin_Banner_Front_1000x1000_e466de4f-4caa-454b-83f4-017f5cc7f722_large.jpg?v=1604712958" alt=""
    srcset="" />

            <div class="card-body">
              <p class="card-text">GUARDIAN CREST BANNER</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-success">Comprar</button>
                  <button type="button" class="btn btn-sm btn-outline-warning">Añadir</button>
                </div>
                <small class="text-muted">$78.99</small>
                <span class="checked fa fa-star "></span>
                <span class="checked fa fa-star "></span>
                <span class="checked fa fa-star "></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="300" src="https://cdn.shopify.com/s/files/1/0417/0233/products/Storage_Set_02_1000x1000_d631a12b-dd6c-4f21-90a8-d8a1c376f9ed_large.jpg?v=1608315572" alt=""
    srcset="" />

            <div class="card-body">
              <p class="card-text">ENGRAM PILLOW AND STORAGE BOX SET</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-success">Comprar</button>
                  <button type="button" class="btn btn-sm btn-outline-warning">Añadir</button>
                </div>
                <small class="text-muted">$60.00</small>
                <span class="checked fa fa-star "></span>
                <span class="checked fa fa-star "></span>
                <span class="checked fa fa-star "></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
            
                
        )
    };
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