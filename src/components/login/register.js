import React, { useState, useRef } from "react";
import { Alert } from 'react-bootstrap';
import loginImg from "../../login.svg";
import { useAuth } from '../../contexts/AuthContext';
import { useHistory }  from 'react-router-dom';

export function Register(props) {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const { signUp } = useAuth();
    const history = useHistory();

    async function handleSubmit(event) {
      event.preventDefault();

      if(usernameRef.current.value.length === 0) return setError('Username is required');
      if(emailRef.current.value.length === 0) return setError('Email is required');
      if(passwordRef.current.value.length === 0) return setError('Password is required');
      if(passwordRef.current.value.length < 8) return setError('Password too short');
      
      try {
        setError('');
        setLoading(true);
        await signUp(emailRef.current.value, passwordRef.current.value);
        history.push('/home-page');
      } catch {
        setError('Failed to create an account')
      }
      setLoading(false);
    }



    return (
      <div className="base-container" ref={props.containerRef}>
        {error && <Alert variant="danger">{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <div className="header">Register</div>
          <div className="content">
            <div className="image">
              <img src={loginImg} alt="svg someone in front of 3 laptops" />
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="username" ref={usernameRef} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder="email" ref={emailRef} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="password" ref={passwordRef} />
              </div>
            </div>
          </div>
          <div className="footer">
            <button disabled={loading} type="submit" className="btn">
            {loading ? 'signing up...' : 'sign up'}
            </button>
          </div>
        </form>
      </div>
    );
  }