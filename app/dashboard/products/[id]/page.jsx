const SingleUser = () => {
  return (
    <div className="h-screen w-full py-4 mb-28 sm:h-screen">
      <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col w-full gap-4 bg-bg rounded-l-md">
        {/* Avatar section */}
        <div className="w-[30%]">
          <div className="avatar flex flex-col bg-bgSoft p-4 rounded-md cursor-pointer">
            <div className="w-full rounded-md mb-2">
              <img src="/noavatar.png" alt="" className="w-full" />
            </div>
            Jenny Yang
          </div>
        </div>

        {/* Form section */}
        <div className="lg:w-[70%] md:w-[70%] sm:w-full bg-bgSoft p-4 rounded-l-md">
          <form action="" className="">
            <div className="flex flex-col">
              <label htmlFor="username" className="mt-2">
                Username
              </label>
              <input
                id="username"
                className="input bg-[#2e374a]"
                type="text"
                placeholder="Jenny Yang"
                required
              />
              <label htmlFor="email" className="mt-2">
                Email
              </label>
              <input
                id="email"
                className="input bg-[#2e374a]"
                type="email"
                placeholder="jennyyang@gmail.com"
                required
              />
              <label htmlFor="password" className="mt-2">
                Password
              </label>
              <input
                id="password"
                className="input bg-[#2e374a]"
                type="password"
                name="password"
                placeholder="******"
              />
              <label htmlFor="phone" className="mt-2">
                Phone
              </label>
              <input
                id="phone"
                className="input bg-[#2e374a]"
                type="tel"
                name="phone"
                placeholder="Enter phone"
              />
              <label htmlFor="address" className="mt-2">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Address"
                className="input bg-[#2e374a]"
              />
              <label htmlFor="isAdmin" className="mt-2">
                Is Admin?
              </label>
              <select
                id="isAdmin"
                name="isAdmin"
                className="select bg-[#2e374a]"
              >
                <option value="" disabled hidden selected>
                  Is Admin?
                </option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
              <label htmlFor="isActive" className="mt-2">
                Is Active?
              </label>
              <select
                id="isActive"
                name="isActive"
                className="select bg-[#2e374a]"
              >
                <option value="" disabled hidden selected>
                  Is Active?
                </option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>

              <button
                type="submit"
                className="btn bg-teal-700 text-white hover:bg-teal-700 hover:opacity-85 mt-2"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
