import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseTwo, increase } from './counterSlice';

Counter.propTypes = {};

function Counter(props) {
  // useSelector là 1 cái hook dùng để lấy state trong redux
  const count = useSelector((state) => state.ten_tu_dat);
  const dispatch = useDispatch();
  const handleIncrease = () => {
    const hanhdong = increase();
    console.log(hanhdong);
    dispatch(hanhdong);
  };
  const handleDeTwo = () => {
    dispatch(decreaseTwo());
  };
  return (
    <div>
      COunter feature
      <p> {count}</p>
      <div>
        <button onClick={handleIncrease}>increase</button>
        <button onClick={handleDeTwo}>Decrease two</button>
      </div>
    </div>
  );
}

export default Counter;
