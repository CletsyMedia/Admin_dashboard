"use server";
import { connect2DB } from "./utils";
import { User } from "./models";
import { Product } from "./models";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);
  try {
    connect2DB();
    // Password hashing with bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (error) {
    if (error.code === 11000 && error.keyPattern.username) {
      // Handle duplicate key error (username already exists)
      console.error(`Username '${username}' already exists.`);
      throw new Error(`Username '${username}' already exists.`);
    } else {
      // Handle other errors
      console.error("Error creating new user:", error);
      throw new Error("Failed to create new user");
    }
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};
// Delet user
export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connect2DB();
    await User.findByIdAndDelete(id);
  } catch (error) {
    // Handle other errors
    console.log("Error deleting user:", error);
    throw new Error("Failed to delete user");
  }
  revalidatePath("/dashboard/users");
};

// Updating user
export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);
  console.log("Updating user with id:", id);
  try {
    connect2DB();
    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );
    await User.findByIdAndUpdate(id, updateFields);
    console.log("User updated successfully");
  } catch (error) {
    console.log("Error updating user's details", error);
    throw new Error("Failed to update user's details");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

// Add product
export const addProduct = async (formData) => {
  const { title, desc, price, stock, color, size } =
    Object.fromEntries(formData);
  try {
    connect2DB();
    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      color,
      size,
    });

    await newProduct.save();
  } catch (error) {
    // Handle other errors
    console.log("Error creating new product:", error);
    throw new Error("Failed to create new product");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};
// Delet product
export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connect2DB();
    await Product.findByIdAndDelete(id);
  } catch (error) {
    // Handle other errors
    console.log("Error deleting product:", error);
    throw new Error("Failed to delete product");
  }
  revalidatePath("/dashboard/products");
};
