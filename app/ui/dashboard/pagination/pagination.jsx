"use client"
import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const page = parseInt(searchParams.get("page")) || 1;
  const params = new URLSearchParams(searchParams);
  const itemsPerPage = 2;
  const prev = itemsPerPage * (page - 1) > 0;
  const next = itemsPerPage * (page - 1) + itemsPerPage < count;

  const handleChangePage = (type) => {
    let newPage = page;
    if (type === "prev") {
      newPage = Math.max(1, page - 1);
    } else {
      newPage = page + 1;
    }
    params.set("page", newPage.toString());
    replace(`${pathname}?${params}`);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="">
        <button
          className={`btn rounded-md py-2 m-2 ${!prev ? "bg-[#b3b3b3] text-gray-500 cursor-default" : "bg-[#5d57c9] text-white hover:bg-[#5d57c9] hover:opacity-90 cursor-pointer"}`}
          disabled={!prev}
          onClick={() => handleChangePage("prev")}
        >
          Prev
        </button>
      </div>
      <div className="">
        <button
          className={`btn rounded-md py-2 m-2 ${!next ? "bg-[#b3b3b3] text-gray-500 cursor-default" : "bg-[#5d57c9] text-white hover:bg-[#5d57c9] hover:opacity-90 cursor-pointer"}`}
          disabled={!next}
          onClick={() => handleChangePage("next")}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
