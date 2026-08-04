import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import icon from '../../../assets/icon/quote_15817435.png'

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://bistro-boss-server-black-ten.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="mb-24">
            <SectionTitle
                subHeading={'---What Our Clients Say---'}
                heading={'Testimonials'}
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="px-24 text-center">
                            <Rating
                                className="mx-auto mb-4"
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <img src={icon} alt="" className="w-16 h-16 mx-auto mb-4" />
                            <p className="text-[#444444] pb-2">{review.details}</p>
                            <h2 className="text-3xl text-[#cd9003] font-medium">{review.name}</h2>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>

        </section>
    );
};

export default Testimonials;