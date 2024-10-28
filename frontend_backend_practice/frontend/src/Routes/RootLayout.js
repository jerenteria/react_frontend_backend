import { Outlet } from "react-router-dom";
import MaintNavigation from "../components/MainNavigation.js";


// root layout adds the <MainNavigation> component above all page components
function RootLayout() {
  return (
    <>
      <MaintNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
