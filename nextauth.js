import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import { connect2DB } from "./app/lib/utils";
import { User } from "./app/lib/models";
import bcrypt from "bcrypt";

const login = async (credentials) => {
  try {
    connect2DB();
    const user = await User.findOne({ username: credentials.username });
    if (!user) throw new Error("Failed to login!");
    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );
    if (!isPasswordCorrect) throw new Error("Failed to login!");
    return user;
  } catch (error) {
    console.log(err);
    throw new Error("Failed to login!");
  }
};

export const { signin, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials)
          return user;
        } catch (error) {
          return null
        }
      },
    }),
  ],
});
