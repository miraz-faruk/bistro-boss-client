import loginPageBgImg from '../../assets/others/authentication.png'
import PageTitle from '../../components/PageTitle/PageTitle';
import loginImg from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    console.log("state in the location login page", location.state);

    useEffect(() => {
        loadCaptchaEnginge(6);
    })

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: "User login successful",
                    showClass: {
                        popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    ` },
                    hideClass: {
                        popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    ` }
                });
                navigate(from, { replace: true });
            });
    }

    const handleValidateCaptcha = (event) => {
        const user_captcha_value = event.target.value;
        console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }
    return (
        <div className="hero min-h-screen"
            style={{ backgroundImage: `url(${loginPageBgImg})` }}
        >
            <PageTitle title={"Login"}></PageTitle>

            <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-5xl bg-cover bg-center border shadow-[0_20px_50px_rgba(0,0,0,0.3)] p-8 lg:p-16 gap-10 lg:gap-16"
                style={{ backgroundImage: `url(${loginPageBgImg})` }}
            >
                <div className="w-1/2">
                    <img src={loginImg} alt="" />
                </div>
                <div className="w-1/2">
                    <h2 className='text-4xl font-bold text-center mb-4'>Login</h2>
                    <form className="fieldset" onSubmit={handleLogin}>
                        <label className="label text-lg font-bold text-[#444]">Email</label>
                        <input type="email" name='email' className="input w-full" placeholder="Email" />
                        <label className="label text-lg font-bold text-[#444]">Password</label>
                        <input type="password" name='password' className="input w-full" placeholder="Password" />

                        <label name="" className="label text-lg font-bold text-[#444]">Captcha</label>
                        <LoadCanvasTemplate />
                        <input onBlur={handleValidateCaptcha} type="text" name='captcha' className="input w-full" placeholder="Type the captcha above" />
                        {/* <button className="btn btn-outline btn-xs mt-2">Validate</button> */}

                        <input className="btn btn-neutral mt-4 w-full bg-[#d1a054b3] border-0 text-white" type="submit" value="Login" />
                        <SocialLogin></SocialLogin>
                    </form>
                    <p><small>New here? <Link to="/signup" className='text-blue-600'>Create a new account</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Login;