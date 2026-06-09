import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImage from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <section className="featured-item bg-fixed py-20 mb-32 text-white">
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
                    <p className="uppercase mb-4">March 20, 2023</p>
                    <h3 className="text-4xl uppercase mb-6">Where can I get some?</h3>
                    <p className="mb-4">
                        Discover our chef’s featured item, prepared fresh daily with premium ingredients and bold flavors. This seasonal specialty is a crowd favorite and perfect for sharing with friends or enjoying as a delicious solo treat.
                    </p>
                    <p className="mb-6">
                        Order now and taste why Bistro Boss is the best choice for gourmet dining in town. The featured dish is complemented by crisp sides and a rich, savory sauce that brings every bite to life.
                    </p>
                    <button className="btn btn-outline border-0 border-b-4 text-white">Order Now</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;