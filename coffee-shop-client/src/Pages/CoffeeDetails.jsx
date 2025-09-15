import { Link, useLoaderData } from "react-router-dom";


const CoffeeDetails = () => {
    const data=useLoaderData()
    return (
         <div className="min-h-screen bg-white px-6 md:px-16 lg:px-32 py-10">
      {/* Back Button */}
      <div className="w-full max-w-4xl flex items-center mb-6">
        <a
          href="/"
          className="flex items-center text-gray-700 hover:text-black font-semibold"
        >
          ← Back to home
        </a>
      </div>

      {/* Content Box */}
      <div className="bg-gray-50 shadow-md rounded-xl flex flex-col md:flex-row items-center gap-20 px-36 py-10">
        {/* Left - Coffee Cup */}
        <div className="flex-shrink-0">
          <img
            src={data.photo}
            alt="Coffee Cup"
            className=" w-52"
          />
        </div>

        {/* Right - Details */}
        <div className="flex-1">
          <h2 className="text-3xl font-black text-brown-700 mb-6">Niceties</h2>
          <ul className="space-y-3 text-gray-800 text-base">
            <li>
              <span className="font-semibold">Name: </span>{data.name}
            </li>
            <li>
              <span className="font-semibold">Chef: </span> {data.chef}
            </li>
            <li>
              <span className="font-semibold">Supplier: </span> {data.supplier}
            </li>
            <li>
              <span className="font-semibold">Taste: </span> {data.taste}
            </li>
            <li>
              <span className="font-semibold">Category: </span>{data.category}
            </li>
            <li>
              <span className="font-semibold">Details: </span> {data.details}
            </li>
          </ul>
        </div>
      </div>
    </div>
    );
};

export default CoffeeDetails;