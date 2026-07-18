import { FaEdit } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const { name, category, recipe, price, _id } = useLoaderData();
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data);
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
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data);
            if (menuRes.data.modifiedCount > 0) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${menuItem.name} updated successfully`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log("with image url", res.data);
    };

    return (
        <div>
            <SectionTitle subHeading="Update Here" heading="Update an item?"></SectionTitle>
            <div className="px-20 pb-20">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <legend className="fieldset-legend font-bold mb-2">Recipe Name*</legend>
                    <input type="text" placeholder="Recipe Name" defaultValue={name} {...register('name', { required: true })} className="input w-full mb-4" />

                    <div className="flex justify-center items-center gap-10 mb-4">
                        <div className="w-1/2">
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend font-bold mb-2">Category*</legend>
                                <select {...register('category', { required: true })} defaultValue={category} className="select w-full">
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
                            <input type="text" placeholder="Price" defaultValue={price} {...register('price', { required: true })} className="input w-full" />
                        </div>
                    </div>

                    <fieldset className="fieldset mb-4">
                        <legend className="fieldset-legend font-bold mb-2">Recipe Details</legend>
                        <textarea className="textarea h-64 w-full" defaultValue={recipe} {...register('recipe')} placeholder="Recipe Details"></textarea>
                    </fieldset>

                    <fieldset className="fieldset mb-4">
                        <input type="file" {...register('image', { required: true })} className="file-input" />
                    </fieldset>

                    <button className="btn bg-orange-300 text-white text-xl">Update Item <FaEdit></FaEdit></button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;