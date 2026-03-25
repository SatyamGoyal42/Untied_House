import { Outlet } from "react-router";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";

export default function Root() {
  return (
    <div className="bg-[#fbf2c4] min-h-screen w-full flex flex-col">
      <Navigation />
      <div className="flex-1">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </div>
      <Footer />
    </div>
  );
}
