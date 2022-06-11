import logo from './logo.svg';
import './App.css';
import TodoFeature from './features/Todo';
import AlbumContainer from './features/Album';
import { useEffect } from 'react';
import categoryApi from './api/categoryApi';
import Counter from './features/Counter';
import styled from 'styled-components';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import Header from 'components/Header';
const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  color: ${(props) => props.color || 'green'};
`;
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
      <Header />
      <p>
        <NavLink to={'/todo'} activeClassName="active-menu">
          Todo
        </NavLink>
      </p>
      <p>
        <NavLink to="/album">Album</NavLink>
      </p>
      <Switch>
        <Route exact path="/" component={TodoFeature} />
        <Route path="/todo" component={TodoFeature} />
        <Route path="/album" component={AlbumContainer} />
      </Switch>
      {/* <Header /> */}
      {/* <TodoFeature /> */}
      {/* <AlbumContainer /> */}
      {/* <Counter /> */}
      Footer
    </div>
  );
}

export default App;
