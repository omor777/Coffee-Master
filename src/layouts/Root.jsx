import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <main className="container mx-auto font-raleway">
      <Outlet />
    </main>
  );
};

export default Root;
