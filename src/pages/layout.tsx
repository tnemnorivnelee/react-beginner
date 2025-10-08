import { Outlet } from "react-router";
import { AppFooter, AppHeader } from "../components/common";

function RootLayout() {
  return (
    <div className="page">
      <AppHeader />
      <div className="container">
        <Outlet />
      </div>
      <AppFooter />
    </div>
  );
}

export default RootLayout;
