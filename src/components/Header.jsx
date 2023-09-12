import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.png';

export default function Header() {
  return (
    <Container className='flex a-center j-between'>
        <div className="logo">
      <img src={logo} alt="Header" />
             </div>
             <div className="buttons"> 
             <button>Login</button>
             <button>Signup</button>
             </div>
    </Container>
  )
}
const Container=styled.div`
padding: 0 4rem;
.logo {
  img {
    height: 5rem;
  }
}
button {
  padding: 0.5rem 1rem;
  background-color: #e50914;
  border: none;
  cursor: pointer;
  color: white;
  border-radius: 0.2rem;
  font-weight: bolder;
  font-size: 1.05rem;
}
`;
