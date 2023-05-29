

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="w-64  mx-auto mx auto text-center mt-20">
           <p className="text-[#D99904] mb-2">{subHeading}</p> 
           <h1 className="text-[ #151515] text-xl border-y-4 py-2 ">{heading}</h1>
        </div>
    );
};

export default SectionTitle;