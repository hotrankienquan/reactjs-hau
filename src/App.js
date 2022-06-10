import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Giấc mơ có thật</h1>
        <iframe
          width="900"
          height="700"
          src="https://www.youtube.com/embed/MERX5z6RrSs?list=RDMERX5z6RrSs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </header>
    </div>
  );
}

export default App;
