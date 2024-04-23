import { useEffect, useState } from "react";
import { BsCupHot } from "react-icons/bs";
import { Link } from "react-router-dom";
import CoffeeCard from "../CoffeeCard/CoffeeCard";

const Coffees = () => {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch("https://coffee-master-server-kappa.vercel.app/coffees")
      .then((res) => res.json())
      .then((data) => setCoffees(data));
  }, []);

  return (
    <div className="my-28">
      <p className="text-[#1B1A1A] text-xl text-center">--- Sip & Savor ---</p>
      <h1 className="text-[55px] text-[#331A15] font-rancho text-center mt-2">
        Our Popular Products
      </h1>
      <Link to="/addCoffee">
        <button className="text-2xl text-white font-rancho btn bg-[#E3B577] border-2 border-[#331A15] rounded-md hover:bg-[#E3B577] hover:border-[#331A15]  mx-auto mt-4 flex items-center gap-2">
          Add Coffee
          <BsCupHot className="text-black" />
        </button>
      </Link>

      {/* our product*/}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {coffees.map((coffee) => (
          <CoffeeCard
            coffees={coffees}
            setCoffees={setCoffees}
            key={coffee._id}
            coffee={coffee}
          />
        ))}
      </div>
      <p className="text-5xl">{coffees.length}</p>
    </div>
  );
};

export default Coffees;
