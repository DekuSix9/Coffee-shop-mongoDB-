import coffee1 from "../assets/images/cups/Rectangle 10.png";
import coffee2 from "../assets/images/cups/Rectangle 11.png";
import coffee3 from "../assets/images/cups/Rectangle 12.png";
import coffee4 from "../assets/images/cups/Rectangle 13.png";
import coffee5 from "../assets/images/cups/Rectangle 14.png";
import coffee6 from "../assets/images/cups/Rectangle 15.png";
import coffee7 from "../assets/images/cups/Rectangle 16.png";
import coffee8 from"../assets/images/cups/Rectangle 9.png";


 

const Follow = () => {
     const images = [
    coffee1,
    coffee2,
    coffee3,
    coffee4,
    coffee5,
    coffee6,
    coffee7,
    coffee8,
  ];
    return (
         <section className="py-12 bg-white">
      {/* Title */}
      <div className="text-center mb-8">
        <p className="text-sm text-gray-600">Follow Us Now</p>
        <h2 className="text-3xl font-rancho text-[#4B3621]">
          Follow on <span className="italic">Instagram</span>
        </h2>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 px-4 md:px-20 lg:px-40">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-md hover:scale-105 transform transition duration-300"
          >
            <img
              src={img}
              alt={`coffee-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
    );
};

export default Follow;