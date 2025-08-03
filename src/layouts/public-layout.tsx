import Header from "@/components/header";
import Footer from "@/components/footer";
import { Outlet } from "react-router-dom";

export const PublicLayout = () => {
  return (
    <div className="w-full">
      {/* Handler to store the data*/}
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};
