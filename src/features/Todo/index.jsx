import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {};
// alt + shifft + O : optimize import
function TodoFeature(props) {
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
  const [todoList, setTodoList] = useState(initTodoList);
  const [filtered, setFiltered] = useState('all');

  const renderedTodo = todoList.filter((todo) => filtered === 'all' || filtered === todo.status);
  console.log('check filtered', filtered, renderedTodo);
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
    setFiltered('all');
  };
  const handleShowCompletedTodo = () => {
    setFiltered('completed');
  };
  const handleShowNewTodo = () => {
    setFiltered('new');
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
      <button onClick={handleShowAllTodo}>Show All</button>
      <button onClick={handleShowCompletedTodo}>Show Completed Task</button>
      <button onClick={handleShowNewTodo}>Show New Task</button>
    </div>
  );
}

export default TodoFeature;
