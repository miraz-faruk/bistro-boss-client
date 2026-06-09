import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImage from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <section className="featured-item bg-fixed py-20 mb-24 text-white">
            <SectionTitle
                subHeading={'---Check it out---'}
                heading={'from our menu'}
            ></SectionTitle>

            <div className="flex items-center gap-8 mx-80">
                <div className="w-1/2">
                    <img
                        src={featuredImage}
                        alt="Featured menu item"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="w-1/2">
                    <p className="uppercase">March 20, 2023</p>
                    <h3 className="text-xl uppercase mb-2">Where can I get some?</h3>
                    <p className="mb-4">
                        Discover our chef’s featured item, prepared fresh daily with premium ingredients and bold flavors. This seasonal specialty is a crowd favorite and perfect for sharing with friends or enjoying as a delicious solo treat.
                    </p>
                    <button className="btn btn-outline border-0 border-b-4 text-white">Order Now</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;