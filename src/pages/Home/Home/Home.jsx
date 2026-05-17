import FeatureBanner from "../../Shared/FeatureBanner/FeatureBanner";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            
            <div className="w-4/5 mx-auto">
                <Category></Category>
                <FeatureBanner
                    title={'bistro boss'}
                    description={'Experience the best dining experience at Bistro Boss! Our restaurant offers a delectable menu crafted with the freshest ingredients, served in a cozy and inviting atmosphere. Whether you are craving savory dishes or sweet treats, Bistro Boss has something to satisfy every palate. Join us for an unforgettable culinary journey that will leave you coming back for more!'}
                ></FeatureBanner>
                <PopularMenu></PopularMenu>
            </div>
        </div>
    );
};

export default Home;