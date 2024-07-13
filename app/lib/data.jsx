import { User } from "./models";
import { Product } from "./models";
import { connect2DB } from "./utils";

export const fetchingUsers = async (q, page) => {
  const regex = new RegExp(q, "i")
  // Pagination
  const itemsPerPage = 5;

  try {
    connect2DB();
    const count = await User.find({ username: { $regex: regex } }).countDocuments();
    const users = await User.find({ username: { $regex: regex } })
      .skip(itemsPerPage * (page - 1))
      .limit(itemsPerPage);
    return {count, users}
    
  } catch (error) {
    console.error("Error fetching user data", error);
    throw new Error("Failed to fetch user data")
  }
};

export const fetchingProducts = async (q, page) => {
  const regex = new RegExp(q, "i")
  // Pagination
  const itemsPerPage = 5;

  try {
    connect2DB();
    const count = await Product.find({ title: { $regex: regex } }).countDocuments();
    const products = await Product.find({ title: { $regex: regex } })
      .skip(itemsPerPage * (page - 1))
      .limit(itemsPerPage);
    return {count, products}
    
  } catch (error) {
    console.error("Error fetching user data", error);
    throw new Error("Failed to fetch user data")
  }
};
