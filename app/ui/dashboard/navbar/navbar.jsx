"use client"
import { usePathname } from "next/navigation";
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname()

  return (  
    <div className="flex justify-between p-4 bg-bgSoft shadow-sm rounded-l-xl">
      <div className="capitalize">{pathname.split("/").pop()}</div>
      <div className="flex items-center justify-center gap-4 relative">
        <div className="relative">
          <input type="text" placeholder="Search..." className="pl-8 pr-4 py-1 bg-[#2e374a] rounded-xl border border-[#2e374a] focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out" />
          <MdSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white" size={20} />
        </div>
        
        <div className="flex">
        <div className="w-8 h-8 hover:bg-[#2e374a] rounded-md p-2">
            <MdOutlineChat className="flex items-center justify-center text-white cursor-pointer" />
          </div>
          <div className="w-8 h-8 hover:bg-[#2e374a] rounded-md p-2">
            <MdNotifications className="flex items-center justify-center text-white cursor-pointer" />
          </div>
          <div className="w-8 h-8 hover:bg-[#2e374a] rounded-md p-2">
            <MdPublic className="flex items-center justify-center text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Navbar;  