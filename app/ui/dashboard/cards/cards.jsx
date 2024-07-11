import { HiOutlineUserGroup } from "react-icons/hi2";

const cardDetails = [
  {
    id: 1,
    icon: <HiOutlineUserGroup />,
    users: "112,501",
    title:"Total Users",
    percentage: "12%",
  },
  {
    id: 2,
    icon: <HiOutlineUserGroup />,
    users: "9.012",
    title:"Stock",
    percentage: "5%",
  },
  {
    id: 3,
    icon: <HiOutlineUserGroup />,
    title:"Revenue",
    users: "14.501",
    percentage: "16%",
  },
];

const Cards = () => {
  return (
    <div className="w-full xl:grid xl:grid-cols-3 xl:gap-2 sm:grid-cols-1 sm:gap-6">
      {cardDetails.map((data) => (
        <div key={data.id} className="col-span-1">
          <div className="p-4 bg-bgSoft rounded-lg shadow w-full cursor-pointer hover:bg-hoverSoft">
            <div className="flex flex-col items-start justify-between mb-2 gap-2">
              <div className="flex items-center gap-2">
                <span className="bg-bg p-2 shadow rounded-full">
                  {data.icon}
                </span>
                <h4>{data.title}</h4>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xl font-bold">{data.users}</span>
                <p><span className="text-green-500">{data.percentage}</span> more than previous week</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
