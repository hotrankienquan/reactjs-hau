import React from 'react';

import { Button } from '@material-ui/core';
import TodoForm from 'features/Todo/components/TodoForm';
import TodoList from 'features/Todo/components/TodoList';
import queryString from 'query-string';
import { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
ListPage.propTypes = {};
// alt + shifft + O : optimize import
function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Code',
      status: 'new',
    },
  ];
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  const [todoList, setTodoList] = useState(initTodoList);
  const [filtered, setFiltered] = useState(() => {
    const params = queryString.parse(location.search);
    // console.log('params', params);
    return params.status || 'all';
  });
  useEffect(() => {
    const params = queryString.parse(location.search);
    console.log('print location search', location.search);
    console.log('params queery parse', params);
    setFiltered(params.status || 'all');
  }, [location.search]);

  const renderedTodo = useMemo(() => {
    // useMemo, khi nào todoList và filtered thay đổi thì mới filter lại
    return todoList.filter((todo) => filtered === 'all' || filtered === todo.status);
  }, [todoList, filtered]);
  // console.log('check filtered', filtered, renderedTodo);
  const handleTodoClick = (todo, index) => {
    // clone current array to the new one
    const newTodoList = [...todoList];
    // console.log(todo, index);

    // toggle state
    const newTodo = {
      ...newTodoList[index],
      status: newTodoList[index].status === 'new' ? 'completed' : 'new',
    };
    newTodoList[index] = newTodo;
    setTodoList(newTodoList);
  };
  const handleShowAllTodo = () => {
    // setFiltered('all');
    const queryParams = { status: 'all' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handleShowCompletedTodo = () => {
    // setFiltered('completed');
    const queryParams = { status: 'completed' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handleShowNewTodo = () => {
    // setFiltered('new');
    const queryParams = { status: 'new' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handleTodoFormSubmit = (values) => {
    console.log('form submit', values);
    const newTodo = {
      id: todoList.length + 1,
      title: values.title,
      status: 'new',
    };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
  };
  return (
    <div>
      <h3>What to do</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <h3>Todo List</h3>
      <TodoList todoList={renderedTodo} onTodoClick={handleTodoClick} />
      <Button variant="outlined" onClick={handleShowAllTodo}>
        Show All
      </Button>
      <Button variant="outlined" onClick={handleShowCompletedTodo}>
        Show Completed Task
      </Button>
      <Button variant="outlined" onClick={handleShowNewTodo}>
        Show New Task
      </Button>
    </div>
  );
}

export default ListPage;
