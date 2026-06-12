import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {

    //Loading data from public folder
    const [menu] = useMenu();
    const popularItems = menu.filter(item => item.category === 'popular');

    return (
        <section>
            <SectionTitle
                subHeading={'---Check it out---'}
                heading={'from our menu'}
            ></SectionTitle>

            <div className="grid grid-cols-2 gap-6">
                {
                    popularItems.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;