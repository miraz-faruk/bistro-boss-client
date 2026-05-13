import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../../assets/home/01.jpg';
import img2 from '../../../assets/home/02.jpg';
import img3 from '../../../assets/home/03.png';
import img4 from '../../../assets/home/04.jpg';
import img5 from '../../../assets/home/05.png';

const Banner = () => {

    const images = [img1, img2, img3, img4, img5];

    return (
        <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showThumbs={true}
            bottom thumbnails
            className="text-center"
        >
            {images.map((img, index) => (
                <div key={index} className="relative h-[80vh] md:h-screen">
                    {/* The Background Image */}
                    <img
                        src={img}
                        className="h-full w-full object-cover"
                        alt="banner"
                    />
                </div>
            ))}
        </Carousel>
    );
};

export default Banner;