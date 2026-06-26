import { MdEditCalendar, MdHome, MdList, MdReviews, MdSearch, MdShoppingCart } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useCart from "../../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();

    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="w-80 min-h-screen bg-orange-300 py-5">
                <h2 className="uppercase text-3xl text-center text-white font-bold">bistro boss<br /><span className="text-2xl">restaurant</span></h2>

                <ul className="menu text-lg font-medium">
                    <li><NavLink to="/dashboard/userHome">
                        <MdHome></MdHome>
                        USER HOME</NavLink>
                    </li>
                    <li><NavLink to="/dashboard/reservation">
                        <MdEditCalendar></MdEditCalendar>
                        RESERVATION</NavLink>
                    </li>
                    <li><NavLink to="/dashboard/review">
                        <MdReviews></MdReviews>
                        RATING</NavLink>
                    </li>
                    <li><NavLink to="/dashboard/bookings">
                        <MdList></MdList>
                        MY BOOKINGS</NavLink>
                    </li>
                    <li><NavLink to="/dashboard/cart">
                        <MdShoppingCart></MdShoppingCart>
                        MY CART ({cart.length})</NavLink>
                    </li>

                    <div className="divider"></div>

                    <li><NavLink to="/">
                        <MdHome></MdHome>
                        HOME</NavLink>
                    </li>
                    <li><NavLink to="/order/salad">
                        <MdSearch></MdSearch>
                        MENU</NavLink>
                    </li>
                </ul>
            </div>
            {/* Dashboard section */}
            <div className="flex-1 py-5 bg-base-200">
                <SectionTitle
                    subHeading="---My Cart---" heading="Wanna Add More?">
                </SectionTitle>

                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;