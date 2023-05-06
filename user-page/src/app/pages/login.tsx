import Image from 'next/image'
    
const Login = () => {
  return (
    <div className='bg-white'>
      <h1 className='text-center text-black'>Login</h1>
        <form method="GET" name="login">
            <label>Username</label>
            <input type="text" name="username" id="u"/>
            <label>Password</label>
            <input type="text" name="password" id="p"/>
            <input type="button" value="login" id="submit"/>
        </form>
    </div>

  )
}

export default Login;