import { Link } from "react-router-dom";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title }) => {
    return (
        <div className="w-4/5 mx-auto">
            <div className="grid grid-cols-2 gap-6">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <div className="text-center mb-12">
                    <button className="btn btn-outline border-0 border-b-4 text-black">Order Your Favorite Food</button>
                </div>
            </Link>
        </div>
    );
};

export default MenuCategory;