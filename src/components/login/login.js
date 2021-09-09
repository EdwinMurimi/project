import React, { useState, useRef, useEffect } from "react";
import { Alert } from 'react-bootstrap';
import loginImg from "../../login.svg";
import { useAuth } from '../../contexts/AuthContext';
import  { useHistory } from 'react-router-dom';

export function Login(props) {
  
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const history = useHistory();


  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/home-page');
    } catch {
      setError('failed to sign in');
    }
    setLoading(false);
  } 

  useEffect(() => {
    if(currentUser) history.push('/home-page')
  }, [currentUser, history])

    return (
      <div className="base-container" ref={props.containerRef}>
        {error && <Alert variant="danger">{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <div className="header">Login</div>
          <div className="content">
            <div className="image">
              <img src={loginImg} alt="svg someone in front of 3 laptops" />
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">email</label>
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
              {loading ? 'signing in...' : 'sign in'}
            </button>
          </div>
        </form>
      </div>
    );
  }