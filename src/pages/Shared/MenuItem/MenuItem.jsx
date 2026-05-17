

const MenuItem = ({ item }) => {
    const { name, image, recipe, price } = item;

    return (
        <div className="flex mb-24">
            <img style={{ borderRadius: '0 200px 200px 200px' }} src={image} alt="" className="w-[100px]" />
            <div className="pl-8">
                <h2 className="uppercase text-xl pb-2">{name}--------------------</h2>
                <p className="text-[#737373]">{recipe}</p>
            </div>
            <p className="text-[#bb8506] text-xl">${price}</p>
        </div>
    );
};

export default MenuItem;