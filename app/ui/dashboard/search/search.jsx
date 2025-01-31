"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MdSearch } from "react-icons/md";
import { useDebouncedCallback } from "use-debounce";

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
 

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);
    // Pagination
    params.set("page", 1)
     
    if (e.target.value) {
      e.target.value.length > 2 && params.set("q", e.target.value);
    }else{
      params.delete("q");
    }
    replace(`${pathname}?${params}`);
  },300);

  return (
    <div className="">
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          className="pl-8 pr-4 py-1 bg-[#2e374a] rounded-xl border border-[#2e374a] focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
          onChange={handleSearch}
        />
        <MdSearch
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white"
          size={20}
        />
      </div>
    </div>
  );
};

export default Search;
