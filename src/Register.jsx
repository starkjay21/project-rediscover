import Add from "./img/add.png"

const Register = () => {
  return (
    <div className="background">
      <div className="register-container">
        <h1>Lamma Chat</h1>
        <h3>Register here</h3>
        <form>
          <input type="text" placeholder="username"/>
          <input type="email" placeholder="email"/>
          <input type="password" placeholder="password"/>
          <input type="file" id="file"/>
          <label htmlFor="file">
            <img src={Add}/>
            <span>Add avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>Already have an account? <span>Login</span></p> 
      </div>
    </div>
  );
}

export default Register;