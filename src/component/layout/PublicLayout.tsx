import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { OutletWrapper } from "./styles";

const PublicLayout = () => {
  return (
    <>
      <Header />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
      <Footer />
    </>
  );
};

export default PublicLayout;
