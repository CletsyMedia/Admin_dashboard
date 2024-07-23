import { fetchProduct } from "../../../lib/data";

const SingleProduct = async ({params}) => {
  const {id} = params;
  const product = await fetchProduct(id);
  return (
    <div className="h-screen w-full py-4 mb-28 sm:h-screen">
      <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col w-full gap-4 bg-bg rounded-l-md">
        {/* Avatar section */}
        <div className="w-[30%]">
          <div className="avatar flex flex-col bg-bgSoft p-4 rounded-md cursor-pointer">
            <div className="w-full rounded-md mb-2">
              <img src={product.img || "/noavatar.png"} alt="" className="w-full" />
            </div>
            {product.title}
          </div>
        </div>

        {/* Form section */}
        <div className="lg:w-[70%] md:w-[70%] sm:w-full bg-bgSoft p-4 rounded-l-md">
          <form action="" className="">
            <div className="flex flex-col">
              <label htmlFor="username" className="mt-2">
                Title
              </label>
              <input
                id="Title"
                className="input bg-[#2e374a]"
                type="text"
                placeholder="Nike"
                required
              />
              <label htmlFor="price" className="mt-2">
                Price
              </label>
              <input
                id="price"
                className="input bg-[#2e374a]"
                type="number"
                placeholder="$245.00"
                required
              />
              <label htmlFor="stock" className="mt-2">
                Stock
              </label>
              <input
                id="stock"
                className="input bg-[#2e374a]"
                type="number"
                name="stock"
                placeholder="24"
              />
              <label htmlFor="color" className="mt-2">
                Color
              </label>
              <input
                id="color"
                className="input bg-[#2e374a]"
                type="text"
                name="color"
                placeholder="red"
              />
              <label htmlFor="size" className="mt-2">
                Size
              </label>
              <input
                type="text"
                id="size"
                name="size"
                placeholder="size"
                className="input bg-[#2e374a]"
              />
              <label htmlFor="category" className="mt-2">
                Category
              </label>
              <select
                id="category"
                name="category"
                className="select bg-[#2e374a]"
              >
                <option value="" disabled hidden selected>
                  Phone
                </option>
                <option value="true">Computers</option>
                <option value="false">Phones</option>
                <option value="false">Kitchen</option>
                <option value="false">Men's Wears</option>
              </select>
              <label htmlFor="Description" className="mt-2">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                cols={10}
                rows={4}
                placeholder="Description"
                className="resize-none textarea bg-[#2e374a]"
              ></textarea>

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

export default SingleProduct;
