import './App.css';

import quotes from "./assets/quote.svg";

function App() {
  return (
    <div className="App">
      <div className="card card-light quote">
        <img src={quotes} alt="aspas" />
        <p>
          Nascida e criada em Nova York. Atualmente morando em Haia, Holanda, após passagens por Paris e Amsterdã. Amante de viagens, aventura, natureza, cidade, vestidos e gatos.
        </p>

        <span>Tessa Jacobson</span>
      </div>

      <div className="card card-dark alerta">
        <span>Newsletter</span>
        <h1>Se inscreva no newsletter!</h1>
        <p>
          Não perca nenhuma notícia urgente ou recurso novo.
        </p>

        <button className="btn">Se inscrever</button>
      </div>
    </div>
  );
}

export default App;
