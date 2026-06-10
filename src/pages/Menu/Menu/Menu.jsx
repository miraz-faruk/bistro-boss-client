import PageTitle from "../../../components/PageTitle/PageTitle";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg';

const Menu = () => {
    return (
        <div>
            <PageTitle title="Menu" />
            <Cover
             img={menuImg}
             title="our menu"
             desc="Our menu offers a delightful array of dishes crafted with the freshest ingredients and bursting with flavor. From savory appetizers to mouthwatering main courses and delectable desserts, our menu has something to satisfy every craving and please every palate."
             ></Cover>
        </div>
    );
};

export default Menu;