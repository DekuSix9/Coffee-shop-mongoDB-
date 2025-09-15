import { Link, useLoaderData } from "react-router-dom";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { useState } from "react";
import Swal from "sweetalert2";

const Products = () => {
  const loadedCoffe = useLoaderData();
  const [coffees,setCoffees]=useState(loadedCoffe)
  const [visibleCount, setVisibleCount] = useState(6);
  const handleCount=()=>{
    setVisibleCount(prev=>prev+4)
  }

  const handleDelete=(_id)=>{
    console.log(_id)
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
   
    console.log("Deleted confirmed")
    fetch(`http://localhost:3000/coffee/${_id}`,{
      method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.deletedCount>0){
        setCoffees(prev=>prev.filter(coffee=>coffee._id!==_id))
         Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });

      }
    })

  }
});

  }

  return (
    <div className="py-10 md:py-20 lg:py-24 px-4 md:px-20 lg:px-40">
      {/* Header */}
      <div className="flex flex-col justify-center items-center mb-10">
        <h2>--- Sip & Savor ---</h2>
        <h1 className="text-4xl font-black mb-2">Our Popular Products</h1>
        <Link
          to="addcoffee"
          className="bg-[#E3B577] hover:bg-amber-700 text-white border cursor-pointer border-black font-medium py-1 px-6
             rounded-md shadow-md transition duration-300"
        >
          Add Coffee
        </Link>
       
      </div>

      {/* Coffee Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {coffees.slice(0,visibleCount).map((coffee) => (
          
          <div
          
            key={coffee._id}
            className="flex justify-between items-center bg-[#F5F4F1] rounded-lg p-4 shadow-md"
          >
            {/* Coffee Image */}
            <img
              src={coffee.photo}
              alt={coffee.name}
              className="w-32 h-32 object-contain"
            />

            {/* Coffee Info */}
            <div className="flex-1 px-6">
              <p>
                <span className="font-bold">Name:</span> {coffee.name}
              </p>
              <p>
                <span className="font-bold">Chef:</span> {coffee.chef}
              </p>
              <p>
                <span className="font-bold">Category:</span> {coffee.category}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2">
              {/* View */}
              <Link to={`/coffeeDetails/${coffee._id}`} className="bg-[#E3B577] text-white p-2 rounded">
                <FaEye />
              </Link>
              {/* Edit */}
              <Link to={`updatecoffe/${coffee._id}`} className="bg-gray-600 text-white p-2 rounded">
                <FaEdit />
              </Link>
              {/* Delete */}
              <button onClick={()=>handleDelete(coffee._id)} className="bg-red-500 text-white p-2 rounded">
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>

   
      {
        visibleCount<loadedCoffe.length&&(
             <div className="flex justify-center mt-8">
        <button onClick={handleCount} className="bg-[#E3B577] hover:bg-amber-700 text-white font-medium py-1 px-4 rounded-md shadow-md transition duration-300">
          See More
        </button>
      </div>

        )
      }
     
    </div>
  );
};

export default Products;
