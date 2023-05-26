const Login = () => {
  return (
    <div className="background">
      <div className="register-container">
        <h1>Lamma Chat</h1>
        <h3>Login here</h3>
        <form>
          <input type="text" placeholder="username"/>
          <input type="password" placeholder="password"/>
          <button>Log in</button>
        </form>
        <p>Don't have an account? <span>Sign Up</span></p> 
      </div>
    </div>
  );
}

export default Login;