
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="mb-12 text-center w-1/3 mx-auto">
            <p className="text-xl text-[#d99904] mb-4">{subHeading}</p>
            <h3 className="text-4xl border-[#e8e8e8] border-y-2 py-5 uppercase">{heading}</h3>
        </div>
    );
};

export default SectionTitle;