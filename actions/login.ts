"use server";
import { AuthError } from "next-auth";
import { signIn } from "../auth";

interface LoginResponse {
  error?: string;
  success?: string;
}
export const login = async (
  email: string,
  password: string,
  callbackUrl?: string
): Promise<LoginResponse | null> => {
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: callbackUrl || "/",
    });
    return { success: "login successful" };
  } catch (error) {
    // console.log("error in login actions", { error });
    if (error instanceof AuthError) {
      //   console.log("error in instanceof authError ", error);

      switch (error.type) {
        case "CredentialsSignin":
          return { error: "invalid credentials" };
        case "AccessDenied":
          return { error: "please verify your email" };
        case "CallbackRouteError":
          if (error.cause?.err?.message === "User not found.") {
            return { error: "user not found" };
          }
          return { error: "something went wrong" };
        default:
          return { error: "something went wrong" };
      }
    }
    throw error;
  }
};
