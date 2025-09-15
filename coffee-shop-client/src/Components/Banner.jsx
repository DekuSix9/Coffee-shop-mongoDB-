import bgimage from '../assets/images/more/3.png';

const Banner = () => {
    return (
        <div
            className="h-[400px] md:h-[480px] bg-cover bg-center flex items-center  md:justify-center "
            style={{ backgroundImage: `url(${bgimage})` }}
        >
            <div className=" max-w-2xl  text-white space-y-2 px-6 ">
                <h1 className="md:text-4xl text-xl  font-bold">
                    Would you like a Cup of Delicious Coffee?
                </h1>
                <p className=" text-gray-200 md:text-lg text-sm md:leading-relaxed leading-tight">
                    It's coffee time - Sip & Savor - Relaxation in every sip! 
                    Get the nostalgia back! Your companion of  every moment! 
                    Enjoy the beautiful moments and make them memorable.
                </p>
                <button className="bg-[#E3B577] hover:bg-amber-700 text-white font-medium py-2 px-6 rounded-md shadow-md transition duration-300">
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default Banner;
