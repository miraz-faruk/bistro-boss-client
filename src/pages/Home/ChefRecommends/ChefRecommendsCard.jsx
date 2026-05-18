
const ChefRecommendsCard = ({ item }) => {

    const { name, image, recipe } = item;
    return (
        <div className="bg-[#f3f3f3] w-full h-full flex flex-col shadow-sm">
            <figure>
                <img
                    src={image}
                    alt={name} />
            </figure>
            <div className="card-body text-center">
                <h2 className="text-2xl font-medium">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn uppercase text-xl font-medium text-[#bb8506] hover:text-black border-b-2 border-b-[#bb8506]">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ChefRecommendsCard;