import Link from "next/link";
import { FiUserPlus, FiEye, FiTrash } from "react-icons/fi";
import Search from "../../ui/dashboard/search/search";
import Pagination from "../../ui/dashboard/pagination/pagination";
import { fetchingProducts } from "../../lib/data";

const ProductsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  // Pagination if no page 1 by default
  const page = searchParams?.page || 1;
  const { count, products } = await fetchingProducts(q, page);

  const trimDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + "...";
    }
    return description;
  };

  return (
    <div className="h-screen w-full">
      <div className="mt-2 bg-bgSoft relative p-5 rounded-xl h-[80vh] overflow-x-auto">
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
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Created</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <label htmlFor={`checkbox${product.id}`}>
                  <input
                    type="checkbox"
                    id={`checkbox${product.id}`}
                    className="checkbox"
                  />
                </label>
              </td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-circle h-12 w-12">
                      <img src={product.img || "/noproduct.jpg "} alt="Product" className="rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="font-medium">{product.title}</div>
                  </div>
                </div>
              </td>
              <td className="relative">
              <div className="cursor-pointer">
                  {trimDescription(product.desc, 30)}
                </div>
                {/* <div className="absolute insert-0 top-0 left-0 right-0 bg-slate-600 p-4 rounded-md">
                  {product.description}
                </div> */}
              </td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.createdAt?.toString().slice(4,16)}</td>
              <td>{product.stock}</td>
              <td>
                <div className="flex gap-2">
                  <Link href={`/dashboard/products/${product.id}`}>
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
        <div className="absolute w-full bottom-2 right-0 left-0 px-4">
          <Pagination count={count} />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
