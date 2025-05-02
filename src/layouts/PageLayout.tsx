import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PageLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 overflow-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
