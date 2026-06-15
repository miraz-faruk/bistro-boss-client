import { useState } from "react";
import FoodCard from "../../../components/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
    // State to track show all or not 
    const [showAll, setShowAll] = useState(false);

    const displayedItems = showAll ? items : items.slice(0, 6);

    return (
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    displayedItems.map(item => <FoodCard
                        key={item._id}
                        item={item}
                    ></FoodCard>)
                }
            </div>
            {
                items.length > 6 && (
                    <div className="text-center my-6">
                        <button onClick={() => setShowAll(!showAll)}
                            className="btn btn-outline border-0 border-b-4 border-[#bb8506] text-[#bb8506] hover:bg-[#bb8506] hover:text-white px-6 uppercase font-semibold text-md transition-all duration-300">
                            {showAll ? 'Show Less' : 'Show All'}
                        </button>
                    </div>
                )
            }
        </div>
    );
};

export default OrderTab;