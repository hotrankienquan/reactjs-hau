import React from 'react';
import { unwrapResult } from '@reduxjs/toolkit';
import { register } from 'features/Auth/userSlice';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm';
Register.propTypes = {};

function Register(props) {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    values.username = values.email;
    const action = register(values);
    return dispatch(action)
      .then(unwrapResult)
      .then((user) => {
        // handle result here
        console.log('new user', user);
      })
      .catch((err) => {
        // handle result here
        console.log(err);
      });

    // try {
    //   values.username = values.email;
    //   const action = register(values);
    //   const resultAction = await dispatch(action);
    //   const user = unwrapResult(resultAction);

    //   console.log('new user', user);
    // } catch (err) {
    //   console.log(err);
    // }
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
