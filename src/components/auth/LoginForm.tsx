"use client";
import { loginSchema } from "@/schema/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { login } from "../../../actions/login";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import AuthCardWrapper from "./AuthCardWrapper";
import { useState, useTransition } from "react";
import FormError from "../utils/FormError";
import FormSuccess from "../utils/FormSuccess";

const LoginForm = () => {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (value: z.infer<typeof loginSchema>) => {
    startTransition(async () => {
      await login(value.email, value.password).then((e) => {
        setError(e?.error);
      });
    });
  };
  return (
    <AuthCardWrapper
      headerLabel="🔒 Login"
      headerDescription="Wellcome back"
      backButtonHref="/auth/register"
      backButtonLabel="Don't have an account?"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="john@doe.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="******" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {error && <FormError msg={error} />}
          {success && <FormSuccess msg={success} />}
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </form>
      </Form>
    </AuthCardWrapper>
  );
};

export default LoginForm;
