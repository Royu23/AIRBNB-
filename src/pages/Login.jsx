import React, { useState } from 'react'
import '../styles/login.css'

import { Button, Col, Container, Form, FormGroup, Row } from 'reactstrap'
import { Link } from 'react-router-dom'

import loginImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'


const Login = () => {

  const [credentials,setCredentials]= useState({
    email:undefined,
    password:undefined
})

  const handleChange = e =>{
    setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
  };

  const handleClick = e =>{
    e.preventDefault();
  }

  return (
<section>
  <Container>
    <Row>
      <Col lg='8' className='m-auto'>
        <div className="login__container d-flex justify-content-between">
          <div className="login__img">
            <img src={loginImg} alt="login" />
          </div>

          <div className="login__form">
            <div className="user">
              <img src={userIcon} alt="user" />
            </div>
            <h2>Login</h2>
            <Form onSubmit={handleClick}>
              <FormGroup>
                <input type="email" id="email" placeholder='Email' required 
                onChange={handleChange}/>
              </FormGroup>
              <FormGroup>
                <input type="password" id="password" placeholder='Password' required 
                onChange={handleChange}/>
              </FormGroup>
              <Button className="btn secondary__btn auth__btn"
              type='submit'>Login</Button>
            </Form>
            <p>Don't have an account ? <Link to='/register'>Create</Link></p>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
</section>
  )
}

export default Login
