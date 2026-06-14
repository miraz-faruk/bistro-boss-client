import PageTitle from "../../../components/PageTitle/PageTitle";
import Cover from "../../Shared/Cover/Cover";
import orderCoverImg from '../../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);

    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    
    console.log(category);

    // Filter the menu items based on their category
    const drinks = menu.filter(item => item.category === 'drinks');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    return (
        <div>
            <PageTitle title="Order" />

            <Cover
                img={orderCoverImg}
                title="our restaurant"
                desc="Welcome to our Restaurant! We are delighted to offer you a seamless and enjoyable dining experience. Explore our wide range of dishes, carefully crafted to meet your needs and preferences. From traditional favorites to innovative creations, we have something for everyone. Our user-friendly interface makes ordering a breeze, while our secure payment options ensure your transactions are safe and hassle-free."
            ></Cover>

            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className="w-4/5 mx-auto mb-12">
                <TabList className="flex justify-center gap-4 border-b-2 mb-8">
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Order;