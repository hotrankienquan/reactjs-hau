import logo from './logo.svg';
import './App.css';
import TodoFeature from './features/Todo';
import AlbumContainer from './features/Album';
import { useEffect } from 'react';
import categoryApi from './api/categoryApi';
import Counter from './features/Counter';

function App() {
  const name = 'hau';
  const age = 18;
  const isFemale = true;
  const student = {
    name: 'Easy frontend',
  };
  const colorList = ['red', 'green', ' blue'];
  useEffect(() => {
    // const fetchCategories = () => {};
    categoryApi.getAll().then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Giấc mơ có thật</h1> */}
        {/* <iframe
          width="900"
          height="700"
          src="https://www.youtube.com/embed/MERX5z6RrSs?list=RDMERX5z6RrSs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe> */}
        {/* <p>Hậu nguyễn</p>
        <p>
          XIn chào {name} - {age} - {isFemale ? "Female" : "Male"}
        </p>
        {isFemale ? <p>Female</p> : <p>Male</p>}
        {isFemale && <p>Female</p>}

        <p>{student.name}</p>
        <ul>
          {colorList.map((color) => (
            <li style={{ backgroundColor: color }}>{color}</li>
          ))}
        </ul> */}
        {/* <TodoFeature /> */}

        {/* <AlbumContainer /> */}
        <Counter />
      </header>
    </div>
  );
}

export default App;
