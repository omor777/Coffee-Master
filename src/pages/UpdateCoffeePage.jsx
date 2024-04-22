const UpdateCoffeePage = () => {
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    console.log(updatedCoffee);

    fetch("http://localhost:5000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="mt-12">
      <div className="bg-[#F4F3F0] py-[70px] px-[112px] rounded-md">
        <h1 className="text-[#374151] text-[45px] font-rancho text-center">
          Update Existing Coffee Details
        </h1>
        <p className="text-[#1B1A1AB2] text-center leading-[30px] text-lg max-w-[932px] mx-auto mt-8">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form onSubmit={handleUpdateCoffee} className="space-y-6 mt-8">
          {/* row */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col ">
              <label
                className="text-[#1B1A1ACC] font-semibold text-xl inline-block mb-3"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter coffee name"
                className="placeholder:text-[#1B1A1A99] input border-none"
              />
            </div>
            <div className="flex flex-col ">
              <label
                className="text-[#1B1A1ACC] font-semibold text-xl inline-block mb-3"
                htmlFor="chef"
              >
                Chef
              </label>
              <input
                type="text"
                name="chef"
                id="chef"
                placeholder="Enter coffee chef"
                className="placeholder:text-[#1B1A1A99] input border-none"
              />
            </div>
          </div>
          {/* row */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col ">
              <label
                className="text-[#1B1A1ACC] font-semibold text-xl inline-block mb-3"
                htmlFor="supplier"
              >
                Supplier
              </label>
              <input
                type="text"
                name="supplier"
                id="supplier"
                placeholder="Enter coffee supplier"
                className="placeholder:text-[#1B1A1A99] input border-none"
              />
            </div>
            <div className="flex flex-col ">
              <label
                className="text-[#1B1A1ACC] font-semibold text-xl inline-block mb-3"
                htmlFor="taste"
              >
                Taste
              </label>
              <input
                type="text"
                name="taste"
                id="taste"
                placeholder="Enter coffee taste"
                className="placeholder:text-[#1B1A1A99] input border-none"
              />
            </div>
          </div>
          {/* row */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col ">
              <label
                className="text-[#1B1A1ACC] font-semibold text-xl inline-block mb-3"
                htmlFor="category"
              >
                Category
              </label>
              <input
                type="text"
                name="category"
                id="category"
                placeholder="Enter coffee category"
                className="placeholder:text-[#1B1A1A99] input border-none"
              />
            </div>
            <div className="flex flex-col ">
              <label
                className="text-[#1B1A1ACC] font-semibold text-xl inline-block mb-3"
                htmlFor="details"
              >
                Details
              </label>
              <input
                type="text"
                name="details"
                id="details"
                placeholder="Enter coffee details"
                className="placeholder:text-[#1B1A1A99] input border-none"
              />
            </div>
          </div>
          {/* row */}
          <div className="grid grid-cols-1 gap-6">
            <div className="flex flex-col ">
              <label
                className="text-[#1B1A1ACC] font-semibold text-xl inline-block mb-3"
                htmlFor="photo"
              >
                Photo
              </label>
              <input
                type="url"
                name="photo"
                id="photo"
                placeholder="Enter photo URL"
                className="placeholder:text-[#1B1A1A99] input border-none"
              />
            </div>
          </div>
          {/* row */}
          <div className="grid grid-cols-1 gap-6">
            <button className="btn bg-[#D2B48C] border-2 border-[#331A15] hover:bg-[#D2B48C] hover:border-[#331A15]">
              Update Coffee Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffeePage;
