import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { data } from "autoprefixer";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data);
        // Upload the image file to the imagebb and get the url
        const formData = new FormData();
        formData.append('image', data.image[0]);
        const res = await axiosPublic.post(image_hosting_api, formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                recipe: data.recipe,
                image: res.data.data.display_url,
                category: data.category,
                price: parseFloat(data.price)
            }
            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data);
            if (menuRes.data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${menuItem.name} added successfully`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log("with image url", res.data);
    };

    return (
        <div>
            <SectionTitle heading="add an item" subHeading="What's new?"></SectionTitle>
            <div className="px-20 pb-20">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <legend className="fieldset-legend font-bold mb-2">Recipe Name*</legend>
                    <input type="text" placeholder="Recipe Name" {...register('name', { required: true })} className="input w-full mb-4" />

                    <div className="flex justify-center items-center gap-10 mb-4">
                        <div className="w-1/2">
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend font-bold mb-2">Category*</legend>
                                <select {...register('category', { required: true })} defaultValue="default" className="select w-full">
                                    <option disabled={true} value="default">Select a category</option>
                                    <option value="salad">Salad</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="soup">Soup</option>
                                    <option value="dessert">Dessert</option>
                                    <option value="drinks">Drinks</option>
                                </select>
                            </fieldset>
                        </div>

                        <div className="w-1/2">
                            <legend className="fieldset-legend font-bold mb-2">Price*</legend>
                            <input type="text" placeholder="Price" {...register('price', { required: true })} className="input w-full" />
                        </div>
                    </div>

                    <fieldset className="fieldset mb-4">
                        <legend className="fieldset-legend font-bold mb-2">Recipe Details</legend>
                        <textarea className="textarea h-64 w-full" {...register('recipe')} placeholder="Recipe Details"></textarea>
                    </fieldset>

                    <fieldset className="fieldset mb-4">
                        <input type="file" {...register('image', { required: true })} className="file-input" />
                    </fieldset>

                    <button className="btn bg-orange-300 text-white text-xl">Add Item <FaUtensils></FaUtensils></button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;