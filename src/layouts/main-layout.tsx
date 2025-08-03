import Header from "@/components/header";
import Footer from "@/components/footer";
import { Outlet } from "react-router-dom";
import Container from "@/components/container";

export const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Handler to store the data*/}
      <Header />

      <Container className="flex-grow">
        <main className="flex-grow ">
          <Outlet />
        </main>
      </Container>

      <Footer />
    </div>
  );
};
