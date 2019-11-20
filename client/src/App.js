import React, {useState, useEffect} from 'react';
import './App.css';


import NavBar from './components/NavBar/NavBar';
import Header from './components/Form/Header/Header';
import Input from './components/Form/Input/Input';
import Button from './components/Form/Button/Button';


function App() {

  const [emailInput, setEmail] = useState('');
  const [passwordInput, setPassword] = useState('');
  const [isBtnActive, setBtnActive] = useState(false);
  const [message, setMessage] = useState('')
  

  const btnActiveToggle = () => {
    if(emailInput.length > 0 || passwordInput.length >0){
      setBtnActive(true)
    } else {
      setBtnActive(false)
    }
  }
  useEffect(btnActiveToggle);


  const handleSubmit = () =>{
    if(!emailInput.includes('@')){
      setMessage("Email address is invalid")
    } 
    
  }

  return (
    <div className="App">
      <NavBar/>
      <div className='container'>
        <div className='form-container'>
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
            {message}
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
                isActive={isBtnActive}/>
            <button onClick={handleSubmit}>Click ME</button>
        </div>
      </div>
    </div>
  );
}

export default App;
