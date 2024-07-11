import menuItems from "./sidebarMenu";
import MenuLink from "./menulinks/menulinks";
import { RiLogoutCircleLine } from "react-icons/ri";


const Sidebar = () => {
  return (
    <div className="fixed">
      {/* User info section */}
      <div className="flex items-center justify-center gap-2 pt-4 pl-2">
        <div className="w-16 h-16">
          <img src="/user.jpg" alt="" className="w-full h-full object-cover rounded-full" />
        </div>
        <div>
          <span>Jenny Yang</span>
          <p>Administrator</p>
        </div>
      </div>
      
      {/* Sidebar menu */}
      <ul className="w-full px-2">
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            <div className="mt-6">
              <p className="mb-2">{menuItem.title}</p>
              <ul className="flex flex-col">
                {menuItem.list.map((item, idx) => (
                  <li key={idx} className="">
                    <MenuLink item={item} />
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
      <button className="btn hover:bg-[#2e374a] bg-transparent outline-none border-0 w-full flex items-center justify-start">
        <RiLogoutCircleLine/>
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
