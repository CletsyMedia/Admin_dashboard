"use server";
import { connect2DB } from "./utils";
import { User } from "./models";
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

export const addProduct = async (formData) => {
  const { title, desc, price, stock, color, size } =
    Object.fromEntries(formData);
  try {
    connect2DB();
    const newUser = new Product({
      title,
      desc,
      price,
      stock,
      color,
      size,
    });

    await newProduct.save();
  } catch (error) {
    if (error.code === 11000 && error.keyPattern.username) {
      // Handle duplicate key error (username already exists)
      console.error(`Product '${product}' already exists.`);
      throw new Error(`Product '${product}' already exists.`);
    } else {
      // Handle other errors
      console.error("Error creating new product:", error);
      throw new Error("Failed to create new product");
    }
  }
  revalidatePath("/dashboard/product");
  redirect("/dashboard/product");
};