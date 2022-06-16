import logo from './logo.svg';
import React from 'react';
import './App.css';
import TodoFeature from './features/Todo';
import AlbumContainer from './features/Album';
import { useEffect } from 'react';
import categoryApi from './api/categoryApi';
import Counter from './features/Counter';
import styled from 'styled-components';
import { Link, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import Header from 'components/Header';
import NotFound from 'components/NotFound';
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
      // console.log(res);
    });
  }, []);
  return (
    <div className="App">
      <Header />
      {/* <p>
        <NavLink to={'/todos'} activeClassName="active-menu">
          Todo
        </NavLink>
      </p>
      <p>
        <NavLink to="/album">Album</NavLink>
      </p> */}
      <Switch>
        {/* <Redirect from="/home" to="/" /> */}
        <Route exact path="/" component={Counter} />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/album" component={AlbumContainer} />
        <Route component={NotFound} />
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
