import React from "react";

const AddUser = () => {
  return (
    <div className="h-screen w-full py-4">
      <div className="bg-bgSoft p-8 rounded-lg shadow-lg w-full ">
        <form action="" className="flex flex-col gap-4">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-4">
          <input
            className="input bg-[#2e374a]" 
            type="text"
            placeholder="Title"
            required
            
          />
          <select
            name="category"
            id="category"
            className="select bg-[#2e374a]"
          >
            <option value="general" disabled hidden selected>Choose a category</option>
            <option value="watches">Watches</option>
            <option value="wallet">Wallet</option>
            <option value="desk">Desk</option>
            <option value="plant">Plant</option>
          </select>
          <input
            className="input bg-[#2e374a]"
            type="number"
            name="price"
            id="price"
            placeholder="Price"
          />
          <input
            className="input bg-[#2e374a]"
            type="number"
            name="stock"
            id="stock"
            placeholder="Stock"
          />
          <input
            className="input bg-[#2e374a]"
            type="text"
            name="color"
            id="color"
            placeholder="Color"
          />
          <input
            className="input bg-[#2e374a]"
            type="text"
            name="size"
            id="size"
            placeholder="Size"
          />
          </div>

          <div className="flex flex-col gap-3">
          <textarea
            name="desc"
            id="desc"
            cols={20}
            rows={7}
            placeholder="Description"
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
