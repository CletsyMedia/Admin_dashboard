"use client"
import React from 'react';
import Cards from "../ui/dashboard/cards/cards";
import RightBar from "../ui/dashboard/rightbar/rightbar";
import Transaction from "../ui/dashboard/transaction/transaction";
import Chart from "../ui/dashboard/chart/chart";

const Dashboard = () => {
  return (
    <div className="max-w-full flex gap-5 mt-5">
      <div className="w-[75%]  flex flex-col gap-5">
        <div className="flex justify-between gap-4">
          <Cards />
        </div>
        <Transaction />
        <Chart />
      </div>
      {/* Right section */}
      <div>
        <RightBar />
      </div>
    </div>
  );
};

export default Dashboard;
