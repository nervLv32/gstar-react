import { Outlet } from "react-router-dom";
import { OutletWrapper } from "./styles";

const IpLayout = () => {
  return (
    <>
      {/* <Header /> */}
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </>
  );
};

export default IpLayout;
