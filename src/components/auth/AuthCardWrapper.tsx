"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Separator } from "../ui/separator";
import SeparatorWithLabel from "../utils/SeparatorWithLabel";

interface AuthCardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  headerDescription?: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}
const AuthCardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  headerDescription,
  showSocial,
}: AuthCardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <div className="w-full flex flex-col gap-y-4 items-center justify-center">
          <h1 className={cn("text-3xl font-semibold")}>{headerLabel}</h1>
          <p className="text-muted-foreground text-sm">{headerDescription}</p>
        </div>
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <div className="w-full flex flex-col">
            <SeparatorWithLabel label="continue with" className="py-2" />
            <div className="flex items-center w-full gap-x-2">
              <Button
                variant={"outline"}
                size={"lg"}
                className="w-full"
                onClick={() => signIn("google", { callbackUrl: "/" })}
              >
                <FcGoogle className="h-5 w-5" />
              </Button>
              <Button
                variant={"outline"}
                size={"lg"}
                className="w-full"
                onClick={() => signIn("github", { callbackUrl: "/" })}
              >
                <FaGithub className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </CardFooter>
      )}
      <CardFooter>
        <Link
          href={backButtonHref}
          className={cn(
            buttonVariants({
              variant: "link",
              size: "sm",
              className: "w-full font-normal",
            })
          )}
        >
          {backButtonLabel}
        </Link>
      </CardFooter>
    </Card>
  );
};

export default AuthCardWrapper;
