import "./signup.css"
const Signup = () => {
 return (
    <> 
    
    <div class="outbox">
            <form action="">
                <h1>Please fill the form to SignUp!!</h1>
                <div class="inputbox">
                    <input type="text" placeholder="Username" required/>
                    <i class="bx bxs-user"></i>
                </div>
                <div class="inputbox">
                    <input type="text" placeholder="Email" required/>
                    <i class="bx bxs-user"></i>
                </div>
                <div class="inputbox">
                    <input type="password" placeholder="Password" required/>
                    <i class="bx bxs-alt"></i>
                </div>
                <div class="inputbox">
                    <input type="Confirm password" placeholder="Confirm Password" required/>
                    <i class="bx bxs-alt"></i>
                </div>

                <button type="Submit" class="btn">SignIn</button>
                
                <div class="acc">
                    <p>Already have an account? <a href="login.html">Login here</a></p>
                </div>
            </form>
            </div>
    </>)
}
export default Signup;