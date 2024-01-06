import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const EditModal = ({ isOpen, closeModal, contact, refetch }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    axios.patch(`https://neutron-server.vercel.app/update/${contact._id}`, data).then((res) => {
      console.log(res);
      if(res.data.acknowledged){
        refetch()
        toast.success("Contact updated successfully.");
      }
      
    });
  };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-medium leading-6 text-gray-900"
                >
                  Update Contact
                </Dialog.Title>
                <div className="mt-2">
                  <form onSubmit={handleSubmit(onSubmit)} className=" mb-4">
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Name
                      </label>
                      <input
                        {...register("name", {
                          required: {
                            value: true,
                            message: "Name is required.",
                          },
                          maxLength: 20,
                        })}
                        defaultValue={contact.name}
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
                        defaultValue={contact.email}
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
                          required: {
                            value: true,
                            message: "Phone Number is required.",
                          },
                        })}
                        defaultValue={contact.phoneNumber}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="phoneNumber"
                        type="text"
                        placeholder="01xxxxxxxxx"
                      />
                      <p className="text-red-600">
                        {errors.phoneNumber?.message}
                      </p>
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Address
                      </label>
                      <textarea
                        rows={5}
                        cols={20}
                        {...register("address", {
                          required: {
                            value: true,
                            message: "Address is required.",
                          },
                        })}
                        defaultValue={contact.address}
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
                          required: {
                            value: true,
                            message: "Photo URL is required.",
                          },
                        })}
                        defaultValue={contact.photo}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="photo"
                        type="text"
                        placeholder="Enter photo URL"
                      />
                      <p className="text-red-600">{errors.photo?.message}</p>
                    </div>
                    <div className="mt-4">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default EditModal;
