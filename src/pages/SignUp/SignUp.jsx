import loginPageBgImg from '../../assets/others/authentication.png'
import PageTitle from '../../components/PageTitle/PageTitle';
import loginImg from '../../assets/others/authentication2.png'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // create user entry in the database
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        title: "Success!",
                                        text: "Profile created successfully",
                                        icon: "success",
                                        confirmButtonColor: "#d1a054"
                                    });
                                    navigate('/');
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
    }

    return (
        <div className="hero min-h-screen"
            style={{ backgroundImage: `url(${loginPageBgImg})` }}
        >
            <PageTitle title={"Sign Up"}></PageTitle>

            <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-5xl bg-cover bg-center border shadow-[0_20px_50px_rgba(0,0,0,0.3)] p-8 lg:p-16 gap-10 lg:gap-16"
                style={{ backgroundImage: `url(${loginPageBgImg})` }}
            >
                <div className="w-1/2">
                    <img src={loginImg} alt="" />
                </div>

                <div className="w-1/2">
                    <h2 className='text-4xl font-bold text-center mb-4'>Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="fieldset">
                        <label className="label text-lg font-bold text-[#444]">Name</label>
                        <input type="text" {...register("name", { required: true })} name='name' className="input w-full" placeholder="Name" />
                        {errors.name && <span className='text-red-600'>Name field is required</span>}

                        <label className="label text-lg font-bold text-[#444]">Photo URL</label>
                        <input type="text" {...register("photoURL", { required: true })} className="input w-full" placeholder="Photo URL" />
                        {errors.photoURL && <span className='text-red-600'>Photo URL field is required</span>}

                        <label className="label text-lg font-bold text-[#444]">Email</label>
                        <input type="email" {...register("email", { required: true })} name='email' className="input w-full" placeholder="Email" />
                        {errors.email && <span className='text-red-600'>Email field is required</span>}

                        <label className="label text-lg font-bold text-[#444]">Password</label>
                        <input type="password" {...register("password", { required: true, minLength: 6 })} name='password' className="input w-full" placeholder="Password" />
                        {errors.password && <span className='text-red-600'>Password field is required and length have to be more than 6 character</span>}

                        <input className="btn btn-neutral mt-4 w-full bg-[#d1a054b3] border-0 text-white" type="submit" value="Sign Up" />

                        <SocialLogin></SocialLogin>
                    </form>
                    <p><small>Already have an account? <Link to="/login" className='text-blue-700'>Please login</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;