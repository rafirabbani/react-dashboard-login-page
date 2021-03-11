import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import styles from './Login.module.css';

const Login = () => {
  const {register, handleSubmit, errors} = useForm();
  const [message, setMessage] = useState();
  const history = useHistory();
  const onSubmit = (data) => {
    fetch(`http://localhost:8000/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
      .then(data => data.json())
      .then((data) => {
        console.log(data);
        sessionStorage.setItem('token', data.token);
        history.push('/dashboard');
      })
      
      
  }

  return(
    <div className={`${styles.container} container-fluid d-flex align-items-center justify-content-center`}>
      <div className={styles.loginContainer}>
        {message && (
          <div className= {`alert fade show d-flex ${message.type}`}
          role='alert'>
            {message.data}
            <span
            aria-hidden='true' 
            className='ml-auto cursor-pointer'
            onClick={()=> setMessage(null)}>
              &times;
              </span>
            </div>
        )}
        <fieldset className ='border p-3 rounded'>
          <legend className={`${styles.loginFormLegend} border rounded text-center`}>
            Please Login
          </legend>
        <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete='off'>
        <div className='form-group'>
        <label htmlFor='inputForUsername'> Username </label>
          <input
          id='inputForUsername'
          name='username'
          type='username'
          className='form-control'
          placeholder='Enter username'
          ref = {register({
            required: {
              value: true,
              message: 'Please enter your username'
            }
          })}
          />
          {errors.username && (
            <span className={`${styles.errorMessage} mandatory`}>{errors.username.message}</span>
          )}
        </div>
        <div className='form-group'>
          <label htmlFor='inputForPassword'>Password</label>
          <input
          id='inputForPassword'
          type='password'
          name='password'
          className='form-control'
          placeholder='Enter Password'
          ref={register({
            required: {
              value: true,
              message: 'Please enter your password'
            }
          })}/>
          {errors.password && (
            <span className={`${styles.errorMessage} mandatory`}>
              {errors.password.message}</span>
          )}
        </div>
        <div className = 'd-flex align-items-center'>
          <button type="submit" className=' btn btn-outline-primary'>
            Login
          </button>
        </div>
      </form>
        </fieldset>
      </div>
    </div>
  )
}

export default Login;