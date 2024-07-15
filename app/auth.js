// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { authConfig } from "./authconfig";
// import { connect2DB } from "./lib/utils";
// import { User } from "./lib/models";
// import bcrypt from "bcrypt";

// // Corrected login function with proper try-catch block
// const login = async (credentials) => {
//   try {
//     connect2DB(); // Establish MongoDB connection

//     // Find user by username
//     const user = await User.findOne({ username:credentials.username});
//     if (!user) {
//       throw new Error("Failed to login!"); // Throw error if user not found
//     }

//     // Check if password matches
//     const isPasswordCorrect = await bcrypt.compare(
//       credentials.password,
//       user.password
//     );
//     if (!isPasswordCorrect) {
//       throw new Error("Failed to login!"); // Throw error if password incorrect
//     }

//     return user; // Return user object if login successful
//   } catch (error) {
//     console.log(error);    throw new Error("Failed to login!");
//   }
// };

// // Exporting NextAuth configurations
// export const { signIn, signOut, auth } = NextAuth({
//   ...authConfig,
//   providers: [
//     CredentialsProvider({
//       async authorize(credentials) {
//         try {
//           const user = await login(credentials);
//           return user;
//         } catch (error) {
//           return null;
//         }
//       },
//     }),
//   ],
// });
