import "./login.css"
const Login = () => {
 return (
    <> 
    <div class="outbox">
        <form action="">
            <h1>Login</h1>
            <div class="inputbox">
                <input type="text" placeholder="Username" required/>
                <i class="bx bxs-user"></i>
            </div>
            <div class="inputbox">
                <input type="password" placeholder="Password" required/>
                <i class="bx bxs-alt"></i>
            </div>
            <div class="rforgot">
              <label><input type="checkbox"/>Remember me</label>
              <a href="#">Forgot Password</a>
            </div>
            <button type="Submit" class="btn">LogIn</button>
            
            <div class="rlink">
                <p> Don't have an account?
                <a href="signup.html">Register</a></p>
            </div>

        </form>
    </div>
    </>)

}
export default Login;