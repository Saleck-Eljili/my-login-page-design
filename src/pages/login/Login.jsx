import React from 'react'

function Login() {
  return (
    <div className="login">
        <div className="card">
            <div className="left">
                <h1>Hello word</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque nesciunt debitis adipisci obcaecati consectetur illo vel aut voluptatibus corrupti quia autem sequi sed maiores, quae omnis tempora ad quaerat molestiae?</p>
                <span>Don't you have an account</span>
                <button>Register</button>
            </div>
            <div className="right">
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder='username'/>
                    <input type="password" placeholder='password'/>
                    <button>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login