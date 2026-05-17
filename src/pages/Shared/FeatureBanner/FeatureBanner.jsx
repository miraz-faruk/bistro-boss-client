import image from "../../../assets/home/chef-service.jpg";

const FeatureBanner = ({ title, description }) => {
    return (
        <div className="relative mb-24">
            <img src={image} alt="" className="brightness-75" />
            <div className="w-3/4 text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/70 p-10">
                <h3 className="text-4xl uppercase pb-2">{title}</h3>
                <p>{description}</p>
            </div>

        </div>
    );
};

export default FeatureBanner;