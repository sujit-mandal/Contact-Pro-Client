import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddContact = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    axios.post("https://neutron-server.vercel.app/add-contact", data).then((res) => {
      console.log(res);
      if (res.data.acknowledged) {
        reset();
        toast.success("Contact added successfully.");
      }
    });
  };
  return (
    <div className="mt-28 max-w-xl mx-auto">
      <div>
        <h1 className="text-2xl lg:text-3xl font-semibold lg:font-bold text-center mb-5">
          Add a Contact
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              {...register("name", {
                required: { value: true, message: "Name is required." },
                maxLength: 20,
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="name"
              type="text"
              placeholder="Full Name"
            />

            <p className="text-red-600">{errors.name?.message}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              {...register("email")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              type="email"
              placeholder="Email Address"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Phone Number
            </label>
            <input
              {...register("phoneNumber", {
                valueAsNumber: true,
                required: { value: true, message: "Phone Number is required." },
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="phoneNumber"
              type="text"
              placeholder="01xxxxxxxxx"
            />
            <p className="text-red-600">{errors.phoneNumber?.message}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Address
            </label>
            <textarea
              rows={5}
              cols={20}
              {...register("address", {
                required: { value: true, message: "Address is required." },
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
              name="address"
              type="text"
              placeholder="Enter your address"
            />
            <p className="text-red-600">{errors.address?.message}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Photo URL
            </label>
            <input
              {...register("photo", {
                required: { value: true, message: "Photo URL is required." },
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="photo"
              type="text"
              placeholder="Enter photo URL"
            />
            <p className="text-red-600">{errors.photo?.message}</p>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
