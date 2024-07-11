import { PiGearFine } from "react-icons/pi";
import { CgMenuGridO } from "react-icons/cg";
import { FiUser } from "react-icons/fi";
import { LuBaggageClaim } from "react-icons/lu";
import { GrMoney } from "react-icons/gr";
import { RiLogoutCircleLine } from "react-icons/ri";
import { BsPieChart } from "react-icons/bs";
import { BsCurrencyExchange } from "react-icons/bs";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        icon: <CgMenuGridO />,
        path: "/dashboard",
      },
      {
        title: "Users",
        icon: <FiUser />,
        path: "/dashboard/users",
      },
      {
        title: "Products",
        icon: <LuBaggageClaim />,
        path: "/dashboard/products",
      },
      {
        title: "Transactions",
        icon: <GrMoney />,
        path: "/dashboard/transactions",
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        icon: <BsCurrencyExchange />,
        path: "/dashboard/analytics",
      },
      {
        title: "Reports",
        icon: <BsPieChart />,
        path: "/dashboard/analytics/users",
      },
      {
        title: "Teams",
        icon: <LuBaggageClaim />,
        path: "/dashboard/analytics/products",
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        icon: <PiGearFine />,
        path: "/dashboard/analytics",
      },
      {
        title: "Help",
        icon: <FiUser />,
        path: "/dashboard/analytics/users",
      },
    ],
  },
];

export default menuItems;
