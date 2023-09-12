
import React,{useState} from 'react'
import styled from "styled-components";
import Header from "../components/Header.jsx"
import Background from "../components/Background.jsx";


export default function Signup() {
    const [showPassword, setShowPassword]=useState(false);
    const [formValues,setFormValues]=useState({
        email:'',
        password:''
    });
    const handlerSignin=()=>{
        console.log(formValues);
    }
    return (
        <Container showPassword={showPassword}>
            <Background />
            <div className="content">
                <Header login />
                <div className="body flex column a-center j-center">
                    <div className="text flex column">
                        <h1>Unlimited movies, TV shows and more.</h1>
                        <h4>Watch anywhere. Cancel anytime.</h4>
                        <h6>
                            Ready to watch? Enter your email to create or restart membership.
                        </h6>
                    </div>
                    <div className="form">
                        <input type="email" placeholder="Email address" name="email" value={formValues.email} onChange={(e)=>{setFormValues({...formValues,[e.target.name]:e.target.value})} }/>

                        <input type="password" placeholder="Password" name="password" value={formValues.password} onChange={(e)=>{setFormValues({...formValues,[e.target.name]:e.target.value})} }/>
                        {!showPassword && (<button onClick={()=>{setShowPassword(true)}} >Get Started</button>)}
                        

                    </div>
                    <button onClick={handlerSignin}>Sign In</button>
                </div>
            </div>
        </Container>
    )
}
const Container = styled.div`
position:relative;
.content{
    position:absolute;
    top:0;
    left:0;
    background-color:rgb(0,0,0,0.5);
    display:grid;
    height:100vh;
    width:100vw;
    grid-template-rows:15vh 85vh;
    .body{
        gap: 1rem;
        .text{
            gap: 1rem;
            text-align:center;
            font-size:2rem;
             h1{
                padding:0 25rem;
             }
        }
        .form{
            display:grid;
            grid-template-column:${({showPassword})=>showPassword?"1fr 1fr":"2fr 1fr"};
            width:60%;
            input{
                color:black;
                border:none;
                padding:1.5rem;
                font-size:1.2rem;
                border:1px solid black;
                &:focus{
                    outline:none;
                }
            }
            button{
                padding: 0.5rem 1rem;
                background-color: #e50914;
                border: none;
                cursor: pointer;
                color: white;
  
                font-weight: bolder;
                font-size: 1.05rem;
            }
        }
    }
}
`;
