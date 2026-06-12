import { Parallax } from 'react-parallax';

const Cover = ({ img, title, desc }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
            className="mb-32"
        >
            <div
                className="hero h-[700px] bg-fixed"
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-white text-center">
                    <div className="max-w-4xl bg-[#151501] bg-opacity-50 p-10">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">{desc}
                        </p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;