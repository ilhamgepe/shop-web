import NextAuth from "next-auth";
import credentials from "next-auth/providers/credentials";
import { NextResponse } from "next/server";
import { promise } from "zod";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    credentials({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, request) {
        const res = await fetch(`${process.env.BACKEND_URL}/auth/login`, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!res.ok) return null;
        const user = await res.json();

        return { ...user.data };
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      console.log({ token, user });

      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.user) {
        session.user = { ...token.user, ...session.user };
      }
      return session;
    },
    async signIn({ user, account, profile }) {
      //   console.log({ user, account, profile });
      return true;
    },
  },
});
