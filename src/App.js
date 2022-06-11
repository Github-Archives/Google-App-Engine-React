import placeholderImage from './Media/placeholder.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={placeholderImage} alt="Logo" />
        <p>
          <h3>
            Het is al geruime tijd een bekend gegeven dat een lezer, 
            tijdens het bekijken van de layout van een pagina, afgeleid 
            wordt door de tekstuele inhoud.
        </h3>
        </p>
      </header>
    </div>
  );
}

export default App;
