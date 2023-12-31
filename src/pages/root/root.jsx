import { Outlet } from "react-router-dom";

import "../../css/root.css";
import { CardMenu } from "../../component/card/menu/card-menu";
export const Root = () => {
  return (
    <>
      <CardMenu />
      <Outlet />
    </>
  );
};
