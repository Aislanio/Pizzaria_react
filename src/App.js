import logo from './assets/pizza.png';
import moto from './assets/delivery.png';
import instragram from './assets/inst.svg';
import facebook from './assets/facebook.png';
import watsap from './assets/whatsapp.png';
import fundo from './assets/fundo.png';
import './App.css';

function App() {
  return (
    <div id="boddy">
      <main>
        <header>
          <div id="logo">
            <img src = {logo}/>
            <h1>Pizzaria</h1>
          </div>

          <div id="menu">
            <div id="side">
              <span id="1"></span>
              <span id="2"></span>
              <span id="3"></span>
            </div>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#"> Sobre nós</a></li>
              <li><a href="#">Cardápio</a></li>
              <li><a href="#">Combos </a></li>
              <li><a href="#">Promoções</a></li>
            </ul>
          </div>
        </header>

        <section>
            <div id="delivery"> 
              <img src={moto}/>
              <h2>Entrega garantida em até <strong> 30 Minutos*</strong> </h2>
            </div>

            <div id="info">

              <p>Lorem ipsu dolor sit ament,</p>
              <p>consectur adipsing </p>

              <a href="#">
                <img src={watsap} />
                Faça seu pedido
              </a>
              <span>
                Consulte nossa aréa de entrega
              </span>

            </div>

        </section>
        <footer>

          <a href="#"><img src={facebook} id="face"/></a>
          <a href="#"><img src={instragram} id="insta"/></a>
        </footer>
      </main>
    </div>
  );
}

export default App;
