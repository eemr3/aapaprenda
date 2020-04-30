import React, {useState} from'react';
import './App.css';

const Card = (props) =>{
  const [cont, setCont] = useState(0);
  
  return(
    <div className="App">
        <h1>Card</h1>
        <img src={props.img} className="img-tm" alt="imagem"/>
        <p>{props.name}</p>
        <p>{props.comentario}</p>
  <button onClick={() => setCont(cont + 1)} className="btn-delete">Liks <span>{cont}</span></button>
      
    </div>
  )
}

function App() {
  return(
    <div className="apresentacao">
     <div className="header">
        <h1>Meu projeto feito do zero</h1>
        <h2>Assistindo as aulas do <a href="https://www.aprendareact.com.br/" target="_blank" rel='noreferrer noopener'>Aprenda Raect</a></h2>
      </div>
      <div className="cards">
        <Card 
        name='Calculadora'
        comentario='Bela calculador, e muito funcional!'
        img="https://raw.githubusercontent.com/eemr3/meu-primeiro/master/calc.png"
        />
        
        <Card 
        name='Mapa do Mundo'
        comentario='Que mapa lindo, muito bom o trabalho.'
        img="https://raw.githubusercontent.com/eemr3/meu-primeiro/master/map.jpg"
        />
        
        <Card 
        name='Jogo tic-tac-toe'
        comentario='Já jogou esse jogo, será que conseguiria me vencer!'
        img="https://raw.githubusercontent.com/eemr3/meu-primeiro/master/tic-tac-toe.png"
        />
      </div>
    </div>
  );
}

export default App;
