import NextAuth, { type DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

interface user {
  refresh_token: string;
  token: string;
  user: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    role: string;
    image: string;
    created_at: string;
    updated_at: string;
  };
}

declare module "next-auth" {
  interface User extends user {}
  interface Session {
    user: user & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: user;
  }
}
