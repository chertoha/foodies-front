import { Outlet } from "react-router-dom";
// import Header from "components/Header/Header";

const SharedLayout = () => {
  return (
    <>
      {/* <Header /> */}
      <div>
        <p>Header</p>
      </div>
      <Outlet />
      <div>
        <p>Footer</p>
      </div>
    </>
  );
};

export default SharedLayout;
