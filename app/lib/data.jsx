import { connect2DB, User } from "./models";

export const fetchingUsers = async () => {
  try {
    await connect2DB(); // Ensure database connection is established

    const users = await User.find();
    return users;
  } catch (error) {
    console.error("Error fetching user data", error);
    throw new Error("Failed to fetch user data");
  }
};
