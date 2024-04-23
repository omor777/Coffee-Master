import PropTypes from "prop-types";
import { FaEye, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, photo, name, chef, taste } = coffee;

  const handleDeleteCoffee = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-master-server-kappa.vercel.app/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainingCoffees = coffees.filter(
                (coffee) => coffee._id !== id
              );
              setCoffees(remainingCoffees);
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="bg-[#F5F4F1] p-8 rounded-xl flex  items-center justify-between">
      <figure>
        <img src={photo} alt="" />
      </figure>
      <div className="max-w-[259px] space-y-3">
        <p className="text-[#1B1A1A] text-xl font-semibold">
          Name: <span className="text-[#5C5B5B] font-normal">{name}</span>
        </p>
        <p className="text-[#1B1A1A] text-xl font-semibold">
          Chef: <span className="text-[#5C5B5B] font-normal">{chef}</span>
        </p>
        <p className="text-[#1B1A1A] text-xl font-semibold">
          Taste: <span className="text-[#5C5B5B] font-normal">{taste}</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <button className="bg-[#D2B48C] p-2.5 rounded">
          <FaEye className="text-white text-xl" />
        </button>
        <Link to={`/updateCoffee/${_id}`}>
          <button className="bg-[#3C393B] p-2.5 rounded">
            <FaPen className="text-white text-xl" />
          </button>
        </Link>
        <button
          onClick={() => handleDeleteCoffee(_id)}
          className="bg-[#EA4744] p-2.5 rounded"
        >
          <MdDelete className="text-white text-xl" />
        </button>
      </div>
    </div>
  );
};

CoffeeCard.propTypes = {
  coffee: PropTypes.object.isRequired,
  coffees: PropTypes.array.isRequired,
  setCoffees: PropTypes.func.isRequired,
};

export default CoffeeCard;
