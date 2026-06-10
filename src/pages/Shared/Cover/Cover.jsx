

const Cover = ({ img, title, desc }) => {
    return (
        <div
            className="hero h-[700px] bg-fixed"
            style={{
                backgroundImage:
                    `url("${img}")`,
            }}
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
    );
};

export default Cover;