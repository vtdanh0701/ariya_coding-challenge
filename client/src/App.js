import React, {useState, useEffect} from 'react';
import './App.css';


import NavBar from './components/NavBar/NavBar';
import Header from './components/Form/Header/Header';
import Input from './components/Form/Input/Input';
import Button from './components/Form/Button/Button';
import {Success,Failed} from './components/Prompt/Prompt';



function App() {

  const [emailInput, setEmail] = useState('');
  const [passwordInput, setPassword] = useState('');
  const [isBtnActive, setBtnActive] = useState(false);
  const [message, setMessage] = useState('')
  const [isSuccess,setSuccess] = useState('')

  const btnActiveToggle = () => {
    if(emailInput.length > 0 && passwordInput.length >0){
      setBtnActive(true)
    } 
    else {
      setBtnActive(false)
    }
  }

 

  useEffect(btnActiveToggle);


  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!emailInput.includes('@')){
      setMessage("Email address is invalid")
      return 
    }
    let requestBody ={
      query: `
          query{
              login(email: "${emailInput}", password: "${passwordInput}"){
                 email
                 name
              }
          }
      `}
    fetch('http://localhost:3001/graphql',{
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if(res.status !== 200 && res.status !== 201){
        setSuccess(<Failed/>)
        throw new Error('Failed')
      }
      return res.json();
    }).then(resData => {
      console.log(resData)
      setSuccess(<Success userName={resData.data.login.name}/>)
      setMessage('')
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="App">
      <NavBar/>
      <div className='container'>
        <div className='form-container'>
            {isSuccess}
            <Header
                title="Login"
                />
            <Input
                label="Email"
                id="email"
                type="text"
                value={emailInput}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
                />
            <div className='message-container'>
                {message}
            </div>
            <Input
                label="Password"
                id="password"
                type="password"
                value={passwordInput}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
                />
            <div className='link'>
              <a>Forgot password?</a>
            </div>
            <Button
                title="Login"
                isActive={isBtnActive}
                onClick={handleSubmit}/>
           
        </div>
      </div>
    </div>
  );
}

export default App;
