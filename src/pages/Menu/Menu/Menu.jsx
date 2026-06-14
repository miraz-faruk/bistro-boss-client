import PageTitle from "../../../components/PageTitle/PageTitle";
import Cover from "../../Shared/Cover/Cover";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';

const Menu = () => {
    const [menu] = useMenu();

    // Filter the menu items based on their category
    const offered = menu.filter(item => item.category === 'offered');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');

    return (
        <div>
            <PageTitle title="Menu" />
            <Cover
                img={menuImg}
                title="our menu"
                desc="Our menu offers a delightful array of dishes crafted with the freshest ingredients and bursting with flavor. From savory appetizers to mouthwatering main courses and delectable desserts, our menu has something to satisfy every craving and please every palate."
            ></Cover>

            {/* Offered section */}
            <SectionTitle
            subHeading="---don't miss---" heading="today's offer" />
            <MenuCategory items={offered} title="offered"></MenuCategory>

            {/* Dessert section */}
            <Cover
                img={dessertImg}
                title="dessert"
                desc="Indulge in our irresistible dessert menu, featuring a delectable selection of sweet treats that will satisfy your cravings and leave you wanting more. From rich chocolate delights to fruity sensations, our desserts are crafted with love and the finest ingredients to provide a perfect ending to your dining experience."
            ></Cover>
            <MenuCategory items={dessert} title="dessert"></MenuCategory>

            {/* Pizza section */}
            <Cover
                img={pizzaImg}
                title="pizzas"
                desc="Indulge in our irresistible pizza menu, featuring a delectable selection of savory pies that will satisfy your cravings and leave you wanting more. From classic margherita to gourmet creations, our pizzas are crafted with love and the finest ingredients to provide a perfect ending to your dining experience."
            ></Cover>
            <MenuCategory items={pizza} title="pizza"></MenuCategory>

            {/* Salad section */}
            <Cover
                img={saladImg}
                title="salads"
                desc="Refresh your palate with our vibrant salad menu, featuring a delightful selection of fresh, crisp vegetables and wholesome ingredients. From classic Caesar to innovative creations, our salads are crafted with love and the finest ingredients to provide a perfect ending to your dining experience."
            ></Cover>
            <MenuCategory items={salad} title="salad"></MenuCategory>

            {/* Soup section */}
            <Cover
                img={soupImg}
                title="soups"
                desc="Warm your heart with our comforting soup menu, featuring a delightful selection of hearty and flavorful broths. From classic tomato to innovative creations, our soups are crafted with love and the finest ingredients to provide a perfect ending to your dining experience."
            ></Cover>
            <MenuCategory items={soup} title="soup"></MenuCategory>
        </div>
    );
};

export default Menu;