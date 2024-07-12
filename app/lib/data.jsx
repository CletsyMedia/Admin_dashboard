import { User } from "./models";
import { connect2DB } from "./utils";

export const fetchingUsers = async (q) => {
  try {
    connect2DB();
    const  users = await User.find({});
    return users
    
  } catch (error) {
    console.error("Error fetching user data", error);
    throw new Error("Failed to fetch user data")
  }
};
