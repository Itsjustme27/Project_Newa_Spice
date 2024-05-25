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
                <div className="form-box d-flex flex-row justify-content-around align-items-center ">
                    <form action="" className="form d-flex  justify-content-around align-items-center">
                        <div className="inputs d-flex flex-column gap-2">
                            <label htmlFor="fname">Fulll Name</label><br />
                            <input type="text" id='fname' placeholder='Name' /><br />

                            <label ht="email">Email/Phone number</label><br />
                            <input type="email" id='email'placeholder='Email or Phone number' /><br />

                            <label htmlFor="password">Password</label><br />
                            <input type="password" id='password' placeholder='Password'/><br />
                        </div>
                        <hr />
                        <div className="links d-flex flex-column justify-content-between align-items-center gap-4">
                                <button type="submit" className='button btn btn-outline-light fs-5' id='submit'>Log In</button>
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