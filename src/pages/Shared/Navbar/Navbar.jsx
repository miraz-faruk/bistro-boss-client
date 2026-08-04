import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { MdShoppingCart } from "react-icons/md";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [cart] = useCart();
    const location = useLocation()

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navOption = <>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/menu">OUR MENU</Link></li>
        <li><Link to="/order/salad">ORDER FOOD</Link></li>
        <li><Link to="/dashboard/cart">
            <button className="btn-ghost flex items-center gap-2">
                <MdShoppingCart className="text-xl" />
                <div className="badge badge-sm badge-secondary font-semibold">+{cart.length}</div>
            </button>
        </Link></li>
        {
            user ? (
                <>
                    <li><button onClick={handleLogOut} className="btn btn-ghost">Logout</button></li>
                </>
            ) : (
                <li><Link to="/login" state={{ from: location }}>Login</Link></li>
            )
        }
        {
            user && isAdmin && <li><Link to="/dashboard/adminHome">Admin Home</Link></li>
        }
        {
            user && !isAdmin && <li><Link to="/dashboard/userHome">User Home</Link></li>
        }

    </>
    return (
        <div className="navbar bg-black shadow-sm fixed top-0 left-0 z-40 bg-opacity-30 text-white backdrop-blur-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navOption}
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl font-semibold">BISTRO BOSS<span className="text-xl">RESTAURANT</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOption}
                </ul>
            </div>
            <div className="navbar-end">
                {/* Dynamically swap the action panel based on authenticated profile context */}
                {user ? (
                    <div className="flex items-center gap-3 bg-gray-800 bg-opacity-40 py-1 px-3 rounded-full border border-gray-700">
                        <span className="text-sm font-semibold text-yellow-300">{user?.displayName || "Admin User"}</span>
                    </div>
                ) : (
                    <Link to="/login" className="btn btn-sm btn-outline text-white hover:bg-white hover:text-black">Get Started</Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;