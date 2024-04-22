import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import useAuthContext from "../hooks/useAuthContext";

const SingUpPage = () => {
  const { createUser } = useAuthContext();

  const handleSingUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;
    const photo_url = form.photo_url.value;

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        form.reset();

        // update user
        updateProfile(user, {
          displayName: name,
          photoURL: photo_url,
        })
          .then(() => {})
          .catch((error) => {
            console.error(error);
          });
        const creationTime = user.metadata.creationTime;
        const newUser = { name, email, creationTime };
        // send user to the server
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "Successful!",
                text: "You have successfully sing up",
                icon: "success",
              });
            }
          });
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="bg-[#F4F3F0] py-12 px-16 md:py-[70px] md:px-[112px] mt-20">
      <h1 className="text-[#374151] text-[45px] font-rancho text-center">
        Sing Up
      </h1>
      <form onSubmit={handleSingUp} className="space-y-6 mt-8">
        {/* row */}
        <div className="grid md:grid-cols-2 gap-6">
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
              placeholder="Enter your name"
              className="placeholder:text-[#1B1A1A99] input border-none"
            />
          </div>
          <div className="flex flex-col ">
            <label
              className="text-[#1B1A1ACC] font-semibold text-xl inline-block mb-3"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="placeholder:text-[#1B1A1A99] input border-none"
            />
          </div>
        </div>
        {/* row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col ">
            <label
              className="text-[#1B1A1ACC] font-semibold text-xl inline-block mb-3"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="placeholder:text-[#1B1A1A99] input border-none"
            />
          </div>
          <div className="flex flex-col ">
            <label
              className="text-[#1B1A1ACC] font-semibold text-xl inline-block mb-3"
              htmlFor="confirm_password"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
              placeholder="Enter confirm password"
              className="placeholder:text-[#1B1A1A99] input border-none"
            />
          </div>
        </div>
        {/* row */}
        <div className="grid grid-cols-1 gap-6">
          <div className="flex flex-col ">
            <label
              className="text-[#1B1A1ACC] font-semibold text-xl inline-block mb-3"
              htmlFor="photo_url"
            >
              Photo Url
            </label>
            <input
              type="url"
              name="photo_url"
              id="photo_url"
              placeholder="Enter photo url"
              className="placeholder:text-[#1B1A1A99] input border-none"
            />
          </div>
        </div>
        {/* row */}
        <div className="grid grid-cols-1 gap-6">
          <button className="btn bg-[#D2B48C] border-2 border-[#331A15] hover:bg-[#D2B48C] hover:border-[#331A15]">
            Sing Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SingUpPage;
