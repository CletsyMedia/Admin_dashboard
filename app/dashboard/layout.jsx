import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Footer from "../ui/dashboard/footer/footer";

const Layout = ({ children }) => {
  return (
    <div className="flex gap-10 h-full overflow-hidden">
      <div className="flex w-64 bg-bgSoft">
        <Sidebar />
      </div>
      <div className="flex-initial w-full mb-4">
        <Navbar />
        {children}
        <Footer  />
      </div>
    </div>
  );
};

export default Layout;
