import { MdSearch } from "react-icons/md"

const Search = ({placeholder}) => {
  return (
    <div className="">
      <div className="relative">
          <input type="text" placeholder={placeholder} className="pl-8 pr-4 py-1 bg-[#2e374a] rounded-xl border border-[#2e374a] focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out" />
          <MdSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white" size={20} />
        </div>
    </div>
  )
}

export default Search