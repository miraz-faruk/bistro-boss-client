import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import slideImage1 from '../../../assets/home/slide1.jpg'
import slideImage2 from '../../../assets/home/slide2.jpg'
import slideImage3 from '../../../assets/home/slide3.jpg'
import slideImage4 from '../../../assets/home/slide4.jpg'
import slideImage5 from '../../../assets/home/slide5.jpg'

import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {

    const categories = [
        { name: 'Salad', image: slideImage1 },
        { name: 'Pizza', image: slideImage2 },
        { name: 'Soup', image: slideImage3 },
        { name: 'Dessert', image: slideImage4 },
        { name: 'Kebab', image: slideImage5 },
    ]

    return (
        <section>
            <SectionTitle
                subHeading={'---From 11"00am to 10:00pm---'}
                heading={'order online'}
            ></SectionTitle>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-20"
            >

                {
                    categories.map((item, index) =>
                        <SwiperSlide key={index} className='relative pb-12'>
                            <div className='h-[500px] w-full overflow-hidden relative'>
                                <img src={item.image} alt={item.name} className='w-full h-full object-cover' />
                            </div>
                            <h3 className='absolute -mt-20 left-0 right-0 text-2xl text-center text-white font-bold uppercase drop-shadow-2xl'>{item.name}</h3>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </section>
    );
};

export default Category;