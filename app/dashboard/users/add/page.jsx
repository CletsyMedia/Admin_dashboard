import React from "react";
import { addUser } from "../../../lib/actions";

const AddUser = () => {
  return (
    <div className="h-screen w-full py-4">
      <div className="bg-bgSoft p-8 rounded-lg shadow-lg w-full ">
        <form action={addUser} className="flex flex-col gap-4">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-4">
          <input
            className="input bg-[#2e374a]" 
            type="text"
            name="username"
            placeholder="Username"
            required
            
          />
          <input
            className="input bg-[#2e374a]" 
            type="email"
            name="email"
            placeholder="Enter email"
            required
            
          />
          
          <input
            className="input bg-[#2e374a]"
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
          />
          <input
            className="input bg-[#2e374a]"
            type="number"
            name="phone"
            id="phone"
            placeholder="Enter phone"
          />
          <select
            name="isAdmin"
            id="isAdmin"
            className="select bg-[#2e374a]"
          >
            <option value={false} disabled hidden selected>Is Admin?</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
            
          </select>
          <select
            name="isActive"
            id="isActive"
            className="select bg-[#2e374a]"
          >
            <option value={true} disabled hidden selected>Is Active?</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
            
          </select>
          </div>

          <div className="flex flex-col gap-3">
          <textarea
            name="address"
            id="address"
            cols={20}
            rows={7}
            placeholder="Address"
            className="resize-none textarea bg-[#2e374a]"
          ></textarea>
          <button type="submit" className="btn bg-teal-700 text-white hover:bg-teal-700 hover:opacity-85">
            Submit
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
