import './login.scss'

export const Login = () => {

    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png" alt=""/>
                </div>
            </div>
            <div className="container">
                <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email or Phone Number"/>
                    <input type="password" placeholder="Password"/>
                    <button className="loginButton">Sign In</button>
                    <span>New to Netflix ? <b>Sign Up Now.</b></span>
                    <small>
                        This page is protected by Google reCaptch to ensure you're not a bot.
                        <b>Learn More </b> 
                    </small>
                </form>
            </div>
        </div>
    )
}
