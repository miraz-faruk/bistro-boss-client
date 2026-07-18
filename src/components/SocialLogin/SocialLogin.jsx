import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate(from, { replace: true });
                    })
            })
    }
    return (
        <div>
            <div className="divider"></div>
            <div className="text-center pb-2">
                <button onClick={handleGoogleSignIn} className="btn btn-circle text-2xl">
                    <FcGoogle></FcGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;