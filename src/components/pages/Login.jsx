import '../../styles/login.css';
import Logo from '../images/logo.png';
import Apple from '../images/apple-icon.png';
import Google from '../images/google-icon.png';
import Facebook from '../images/facebook-icon.png';

import { useState } from 'react';
import { useNavigate } from "react-router-dom";


export function Login() {
  const navigate = useNavigate();

  const [login, setLogin] = useState({"username":"", "password":""})
  const [cssInputs, setCssInputs] = useState({"cssUsername":false, "cssPassword":false});
  const [button, setButton] = useState(false);

  function handleInputs(e) {

    if (e.target.getAttribute('name') == 'username') {
      setLogin({ "username": e.target.value, "password": login.password });
      
      if(e.target.value.length > 6 && login.password.length > 6) {
        setButton(true);
      } else {
        setButton(false);
      }
    } else if (e.target.getAttribute('name') == 'password') {
      setLogin({ "username": login.username, "password": e.target.value });

      if(e.target.value.length > 6 && login.username.length > 6) {
        setButton(true);
      } else {
        setButton(false);
      }
    }

  }

  const handleCssInputs = (e) => {
    if (e.target.getAttribute('name') == 'username') {
      setCssInputs({"cssUsername":!cssInputs.cssUsername, "cssPassword":cssInputs.cssPassword});
    } else if (e.target.getAttribute('name') == 'password') {
      setCssInputs({"cssUsername":cssInputs.cssUsername, "cssPassword":!cssInputs.cssPassword});
    }
  }

  function Submit() {
    localStorage.setItem('username', login.username);
    navigate("/game");
  }

  return (    
    <main>
      <section className='login'>
        <div className="wrapper">
          <img src={Logo} className='input__logo' />

          <h1 className='input__title'>Fazer Login</h1>

          <label className='input__label'>
            <span className={`${cssInputs.cssUsername ? 'span-active' : ''} ${login.username.length > 0 ? 'span-active' : ''}`}>nome de usuário</span>
            <input type="text" name='username' className='input' onFocus={(e) => handleCssInputs(e)} onBlur={(e)=>handleCssInputs(e)} onChange={(e)=>handleInputs(e)} />
          </label>
          <label className='input__label'>
            <span className={`${cssInputs.cssPassword ? 'span-active' : ''} ${login.password.length > 0 ? 'span-active' : ''}`}>senha</span>
            <input type="password" name='password' className='input' onFocus={(e) => handleCssInputs(e)} onBlur={(e)=>handleCssInputs(e)} onChange={(e)=>handleInputs(e)}/>
          </label>
          <div className='input__icons'>
            <button type='button' className='icons__button'>
              <img src={Facebook} alt="facebook" />
            </button>

            <button type='button' className='icons__button'>
              <img src={Google} alt="google" />
            </button>

            <button type='button' className='icons__button'>
              <img src={Apple} alt="apple" />
            </button>
          </div>

          <label className='input__label--checkbox'>
            <input type='checkbox' className='input--checkbox' />
            Manter Login
          </label>
        </div>
        
        <div className="wrapper">
          {button && (
            <button type='button' className='input__button' onClick={Submit}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" >
                <path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"/>
              </svg>
            </button>
          )}

          {!button && (
            <button type='button' className='input__button' disabled>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" >
                <path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"/>
              </svg>
            </button>
          )}
          

          <a href="#" className='input__link'>não consegue iniciar sessão?</a>
          <a href="#" className='input__link'>criar conta</a>
          
          
        </div>
      </section>

      <section className="wallpaper"></section>
    </main>
  );
}
