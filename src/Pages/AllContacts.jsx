import { useQuery } from "@tanstack/react-query";
import ContactCard from "../components/ContactCard";
import axios from "axios";

const AllContacts = () => {
  const { data, refetch } = useQuery({
    queryKey: ["contacts"],
    queryFn: async () => {
      const res = await axios.get("https://neutron-server.vercel.app/contacts");
      return res.data;
    },
  });
  return (
    <div className="max-w-screen-2xl mx-auto mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-5">
      {data?.map((contact) => (
        <ContactCard key={contact._id} contact={contact} refetch={refetch}></ContactCard>
      ))}
    </div>
  );
};

export default AllContacts;
