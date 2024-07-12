import Link from "next/link";
import { format } from "date-fns";
import { FiUserPlus, FiEye, FiTrash } from "react-icons/fi";
import Search from "../../ui/dashboard/search/search";
import Pagination from "../../ui/dashboard/pagination/pagination";
import { fetchingUsers } from "../../lib/data";

// const users = [
//   {
//     id: 1,
//     name: "Hart Hagerty",
//     email: "hagerty@gmail.com",
//     created: new Date(2024, 6, 24),
//     role: "Admin",
//     status: "active",
//     image: "https://img.daisyui.com/tailwind-css-component-profile-2@56w.png",
//   },
//   {
//     id: 2,
//     name: "Alice Johnson",
//     email: "alice.johnson@gmail.com",
//     created: new Date(2023, 10, 15),
//     role: "User",
//     status: "inactive",
//     image: "https://randomuser.me/api/portraits/women/1.jpg",
//   },
//   {
//     id: 3,
//     name: "John Doe",
//     email: "john.doe@example.com",
//     created: new Date(2022, 3, 5),
//     role: "Admin",
//     status: "active",
//     image: "https://randomuser.me/api/portraits/men/1.jpg",
//   },
//   {
//     id: 4,
//     name: "Emily Smith",
//     email: "emily.smith@example.com",
//     created: new Date(2023, 7, 12),
//     role: "User",
//     status: "active",
//     image: "https://randomuser.me/api/portraits/women/2.jpg",
//   },
//   {
//     id: 5,
//     name: "Michael Brown",
//     email: "michael.brown@example.com",
//     created: new Date(2024, 1, 28),
//     role: "Admin",
//     status: "inactive",
//     image: "https://randomuser.me/api/portraits/men/2.jpg",
//   },
// ];

const UsersPage =  async ({searchParam}) => {
  const q = searchParams

  const users = await fetchingUsers()
  console.log(users);
  
  return (
    <div className="h-screen w-full">
      <div className="mt-2 bg-bgSoft p-5 rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <Search placeholder="Search a user.." />
        <Link href="/dashboard/users/add">
          <button className="flex items-center gap-1 justify-center p-3 rounded-md outline-none border-0 bg-[#5d57c9] hover:bg-opacity-60 text-white">
            <FiUserPlus />
            Add New
          </button>
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>
              <label htmlFor="selectAll">
                <input
                  type="checkbox"
                  id="selectAll"
                  className="checkbox hidden"
                />
              </label>
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Created</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <label htmlFor={`checkbox${user.id}`}>
                  <input
                    type="checkbox"
                    id={`checkbox${user.id}`}
                    className="checkbox"
                  />
                </label>
              </td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-circle h-12 w-12">
                      <img src={user.img || "/noavatar.png"} alt="Avatar" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user.username}</div>
                  </div>
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4,16)}</td>
              <td>{user.isAdmin ? "Admin" : "Client"}</td>
              <td>{user.isActive ? "active" : "passive"}</td>
              <td>
                <div className="flex gap-2">
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button
                      className="flex items-center justify-center px-3 py-1 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white"
                      title="View"
                    >
                      <FiEye className="mr-1" />
                      View
                    </button>
                  </Link>
                  <Link href="/">
                    <button
                      className="flex items-center justify-center px-3 py-1 text-red-500 border border-red-500 rounded-md hover:bg-red-500 hover:text-white"
                      title="Delete"
                    >
                      <FiTrash className="mr-1" />
                      Delete
                    </button>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
    </div>
  );
};

export default UsersPage;
