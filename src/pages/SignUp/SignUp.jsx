import loginPageBgImg from '../../assets/others/authentication.png'
import PageTitle from '../../components/PageTitle/PageTitle';
import loginImg from '../../assets/others/authentication2.png'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);

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

                        <label className="label text-lg font-bold text-[#444]">Email</label>
                        <input type="email" {...register("email", {required: true})} name='email' className="input w-full" placeholder="Email" />
                        {errors.email && <span className='text-red-600'>Email field is required</span>}

                        <label className="label text-lg font-bold text-[#444]">Password</label>
                        <input type="password" {...register("password", {required: true, minLength: 6})} name='password' className="input w-full" placeholder="Password" />
                        {errors.password && <span className='text-red-600'>Password field is required and length have to be more than 6 character</span>}

                        <input className="btn btn-neutral mt-4 w-full bg-[#d1a054b3] border-0 text-white" type="submit" value="Sign Up" />
                    </form>
                    <p><small>Already have an account? <Link to="/login" className='text-blue-700'>Please login</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;