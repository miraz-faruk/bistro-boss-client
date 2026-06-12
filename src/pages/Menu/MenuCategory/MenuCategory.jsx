import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items }) => {
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
            <div className="text-center mb-12">
                <button className="btn btn-outline border-0 border-b-4 text-black">Order Your Favorite Food</button>
            </div>
        </div>
    );
};

export default MenuCategory;