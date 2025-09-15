import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
  const data=useLoaderData();
   const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
  
      const name = form.name.value;
      const chef = form.chef.value;
      const supplier = form.supplier.value;
      const taste = form.taste.value;
      const category = form.category.value;
      const details = form.details.value;
      const photo = form.photo.value;
  
      const user = { name, chef, supplier, taste, category, details, photo };
      console.log(user);
  
      fetch(`http://localhost:3000/coffee/${data._id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
        .then(res => res.json())
        .then(data => {
          console.log("Server response:", data);
  
          
          if (data.modifiedCount>0) {
            Swal.fire({
              title: 'Success!',
              text: 'Coffee Update Successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            });
           
          }
        })
        .catch(err => {
          console.error(err);
          Swal.fire("Error!", "Something went wrong", "error");
        });
    }
  
    return (
        <div className="bg-[#F4F3F0] min-h-screen flex flex-col items-center py-10 px-4">
      {/* Back Button */}
      <div className="w-full max-w-4xl flex items-center mb-6">
        <a
          href="/"
          className="flex items-center text-gray-700 hover:text-black font-semibold"
        >
          ← Back to home
        </a>
      </div>

      {/* Form Container */}
      <div className="bg-[#F4F3F0] w-full max-w-4xl rounded-xl shadow-md p-10">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 drop-shadow-sm">
         Update {data.name}  Details
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
          It is a long established fact that a reader will be distraceted by the readable content 
          of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
          distribution of letters, as opposed to using Content here.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Name
            </label>
            <input
           
            name="name"
              type="text"
              defaultValue={data.name}
              placeholder="Enter coffee name"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brown-500"
            />
          </div>

          {/* Chef */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Chef
            </label>
            <input
            
            name="chef"
              type="text"
              defaultValue={data.chef}
              placeholder="Enter coffee chef"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brown-500"
            />
          </div>

          {/* Supplier */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Supplier
            </label>
            <input
             
            name="supplier"
              type="text"
               defaultValue={data.supplier}
              placeholder="Enter coffee supplier"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brown-500"
            />
          </div>

          {/* Taste */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Taste
            </label>
            <input
            
            name="taste"
              type="text"
               defaultValue={data.taste}
              placeholder="Enter coffee taste"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brown-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Category
            </label>
            <input
            
            name="category"
              type="text"
               defaultValue={data.category}
              placeholder="Enter coffee category"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brown-500"
            />
          </div>

          {/* Details */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Details
            </label>
            <input
            
            name="details"
              type="text"
               defaultValue={data.details}
              placeholder="Enter coffee details"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brown-500"
            />
          </div>

          {/* Photo (Full Width) */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Photo
            </label>
            <input
           
            name="photo"
              type="text"
               defaultValue={data.photo}
              placeholder="Enter photo URL"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brown-500"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full cursor-pointer bg-[#D2B48C] hover:bg-[#c4a070] text-black font-semibold py-3 px-4 rounded-lg shadow-md transition duration-300"
            >
              Update Coffee Details
            </button>
          </div>
        </form>
      </div>
    </div>
    );
};

export default Update;