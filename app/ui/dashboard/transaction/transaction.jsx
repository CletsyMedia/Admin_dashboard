import React, { useState } from 'react';
import { format } from "date-fns";
import Pagination from './pagination';

const Transaction = () => {

  const transactions = [
    {
      id: 1,
      img: "https://img.daisyui.com/tailwind-css-component-profile-2@56w.png",
      name: "Hart Hagerty",
      country:"United State",
      status: "Pending",
      date: new Date(2024, 5, 15),
      amount: 45.0,
    },
    {
      id: 2,
      img: "https://img.daisyui.com/tailwind-css-component-profile-3@56w.png",
      name: "Helen Chung Doe",
      country:"Beijing, China",
      status: "Success",
      date: new Date(2024, 5, 16),
      amount: 70.0,
    },
    {
      id: 3,
      img: "https://img.daisyui.com/tailwind-css-component-profile-4@56w.png",
      name: "Jane Smith",
      country:"United Kingdom",
      status: "Failed",
      date: new Date(2024, 5, 17),
      amount: 25.0,
    },
    {
      id: 4,
      img: "https://img.daisyui.com/tailwind-css-component-profile-5@56w.png",
      name: "John Doe",
      country: "Australia",
      status: "Success",
      date: new Date(2024, 5, 18),
      amount: 55.0,
    },
    {
      id: 5,
      img: "/user.jpg",
      name: "Alice Johnson",
      country: "Canada",
      status: "Pending",
      date: new Date(2024, 5, 19),
      amount: 60.0,
    },
    {
      id: 6,
      img: "https://img.daisyui.com/tailwind-css-component-profile-4@56w.png",
      name: "Jane Smith",
      country:"United Kingdom",
      status: "Failed",
      date: new Date(2024, 5, 17),
      amount: 25.0,
    },
    {
      id: 7,
      img: "https://img.daisyui.com/tailwind-css-component-profile-5@56w.png",
      name: "John Doe",
      country: "Australia",
      status: "Success",
      date: new Date(2024, 5, 18),
      amount: 55.0,
    },
    {
      id: 8,
      img: "/user.jpg",
      name: "Alice Johnson",
      country: "Canada",
      status: "Pending",
      date: new Date(2024, 5, 19),
      amount: 60.0,
    },
    // Add more transactions as needed
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-400 text-white";
      case "Success":
        return "bg-green-400 text-white";
      case "Failed":
        return "bg-red-400 text-white";
      default:
        return "bg-gray-400 text-white";
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page

  // Calculate current items based on currentPage
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = transactions.slice(indexOfFirstItem, indexOfLastItem);

  // Function to change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-bgSoft relative rounded-md mt-2 p-4 h-[66vh]">
      <h1 className="text-textSoft  mb-2">Latest Transactions</h1>
      <div className="overflow-x-auto bg-bgSoft">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  {/* <input type="checkbox" className="checkbox" /> */}
                </label>
              </th>
              <th>Name</th>
              <th>Status</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {/* Rows mapped from currentItems array */}
            {currentItems.map((transaction) => (
              <tr key={transaction.id}>
                <td>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask rounded-full h-12 w-12 overflow-hidden">
                        <img
                          src={transaction.img}
                          alt="Avatar Tailwind CSS Component"
                          className="object-cover h-full w-full"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{transaction.name}</div>
                      <div className="text-sm opacity-50">{transaction.country}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <p
                    className={`p-2 rounded-sm text-center ${getStatusColor(
                      transaction.status
                    )}`}
                  >
                    {transaction.status}
                  </p>
                </td>
                <td>{format(transaction.date, "MMMM dd, yyyy")}</td>{" "}
                {/* Format date using date-fns */}
                <td>
                  <button className="btn btn-ghost btn-xs">
                    ${transaction.amount.toFixed(2)}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination 
        totalItems={transactions.length}
        itemsPerPage={itemsPerPage}
        paginate={paginate}
      />
    </div>
  );
};

export default Transaction;
