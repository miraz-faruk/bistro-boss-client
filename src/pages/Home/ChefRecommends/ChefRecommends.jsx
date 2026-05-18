import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ChefRecommendsCard from "./ChefRecommendsCard";

const ChefRecommends = () => {

    const [offered, setOffered] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const recommendedItems = data.filter(item => item.category === 'offered');
                setOffered(recommendedItems);
            })
    }, []);
    return (
        <section className="mb-24">
            <SectionTitle
                subHeading={'---Should Try---'}
                heading={'Chef Recommends'}
            ></SectionTitle>

            <div className="grid grid-cols-3 gap-6 items-stretch">
                {
                    offered.map(item => 
                        <ChefRecommendsCard
                        key={item._id}
                        item={item}
                        ></ChefRecommendsCard>
                    )
                }
            </div>
        </section>
    );
};

export default ChefRecommends;