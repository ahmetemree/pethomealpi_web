   import "./loginPage.scss"
   
   const LoginPage = () => {
      return (
        <div className='loginPage'>
          <form action="" className="form">
            <input type="mail" placeholder="E-mail address"/>
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            <button>Sign In</button>
          </form>
        </div>
      )
    }
    
    export default LoginPage