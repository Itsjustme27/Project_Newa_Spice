import newaLogo from './assets/logo.png';
import fb from './assets/fb.png';
import google from './assets/google.png';

export default function Form() { 

    return (
        <>
            <div className="form-container d-flex flex-column justify-content-center align-items-center fs-5">
                <div className="img-container">
                    <img src={newaLogo} alt="logo" className='newa-logo'  />
                </div>
                <div className="form-box d-flex flex-row  align-items-center ">
                    <form className="form d-flex  align-items-center">
                        <div className="inputs d-flex flex-column gap-1">
                            <label htmlFor="fname" className='form-label'>Full Name</label>
                            <input type="text" id='fname' className='form-control' placeholder='Name' />
                            <small id="nameHelpId" className="form-text text-danger">Full Name Cannot be empty</small>

                            <label htmlFor="email" className='form-label'>Email/Phone number</label>
                            <input type="email" id='email' className='form-control' placeholder='Email or Phone number' />
                            <small id="emailHelpId" className="form-text text-danger">Email Cannot be empty</small>

                            <label htmlFor="password" className='form-label'>Password</label>
                            <input type="password" id='password' className='form-control' placeholder='Password'/>
                            <small id="passwordHelpId" className="form-text text-danger">Password Cannot be empty</small>
                        </div>
                        <hr />
                        <div className="links d-flex flex-column justify-content-between align-items-center gap-4">
                                <button type="submit" className='button btn btn-outline-light fs-5'    id='submit'>Log In</button>    
                                 <h5>OR</h5>
                                <button className='button btn btn-outline-light fs-5'><img src={fb} alt="Facebook" className='fb' />Facebook</button>
                                <button className='button btn btn-outline-light fs-5'><img src={google} alt="google" className='google' />Google</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}