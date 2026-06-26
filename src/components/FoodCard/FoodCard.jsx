import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
    const { name, image, recipe, price, _id, category } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleAddToCart = () => {
        if (user && user.email) {
            // send cart item to the database 
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price,
                category
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch cart to update the cart item count
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not logged in",
                text: "PLease Login for add to cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed)
                    navigate('/login', { state: { from: location } });
            });
        }
    }

    return (
        <div className="bg-[#f3f3f3] w-full h-full flex flex-col shadow-sm relative">
            <figure>
                <img
                    src={image}
                    alt={name} />
            </figure>
            <p className="bg-[#111827] text-white absolute top-0 right-0 mr-4 mt-4 px-2 items-stretch">${price}</p>
            <div className="card-body text-center">
                <h2 className="text-2xl font-medium">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={handleAddToCart} className="btn uppercase text-xl font-medium text-[#bb8506] hover:text-black border-b-2 border-b-[#bb8506]">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;