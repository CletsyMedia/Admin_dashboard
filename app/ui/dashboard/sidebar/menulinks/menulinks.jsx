"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLink = ({ item }) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <Link href={item.path} className={`flex items-center gap-1 mb-2 hover:bg-[#2e374a] p-2 rounded-md ${pathname === item.path ? 'bg-[#2e374a]' : 'text-white'}`}>
        <span className="text-xl">{item.icon}</span>
        <span>{item.title}</span>
    </Link>
  );
};

export default MenuLink;
