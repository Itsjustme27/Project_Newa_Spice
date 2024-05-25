import logo from './assets/logo.png/';
import login from './assets/login.png';
import signup from './assets/signup.png';
export default function Navbar() {

    return (
        <nav className="navbar d-flex justify-content-around align-items-center gap-5">
            <a href="#"><img src={logo} alt="Logo" className='img-fluid'/></a>
            <div className="nav">
                <ul className='nav-items d-flex gap-3 m-2 fs-5'>
                    <a href='#home'><li>Home</li></a>
                    <a href='#about'><li>About Us</li></a>
                    <a href='#contact'><li>Contact</li></a>
                    <a href='#services'><li>Services</li></a>
                </ul>
                <form className="search d-flex gap-2 rounded-pill m-2" role="search">
                    <input class="form-control me-2 h-75" type="search" className="searching" placeholder="Search" aria-label="Search" />
                 </form>
                <div className="button d-flex flex-row gap-2 m-2 h-75">
                    <button type='submit' className="btn btn-outline-light align-items-center justify-content-center w-50"><img src={login} alt="login" className='loginLogo' />Log in</button>
                    <button type='submit' className='btn btn-outline-light w-50'><img src={signup} alt="signup" className='signupLogo' />Sign Up</button>
                </div>
            </div>
        </nav>
    );
}