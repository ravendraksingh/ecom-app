"use client";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCustomer } from "@/context/CustomerContext";
import { useRouter, useSearchParams } from "next/navigation";

const formSchema = z.object({
  email: z.string().min(6, {
    message: "Email must be at least 6 characters.",
  }),
  password: z
    .string()
    .min(6, { message: "password must be at least 6 characters" }),
});

function LoginForm({ redirectTo }) {
  const { login } = useCustomer();
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });

  async function onSubmit(data) {
    try {
      const response = await fetch("/api/dummyjson/auth/login", {
        method: "POST",
        body: JSON.stringify({
          username: "emilys",
          password: "emilyspass",
          expiresInMins: 30,
        }),
      });
      if (response.status === 200) {
        const data = await response.json();
        login(data);
        router.push(redirectTo);
      }
    } catch (err) {
      console.log("Login Error: ", err.message);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
        <FormField
          control={form.control}
          name="email"
          className="mb-3"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email here"
                  {...field}
                  className="mb-3 max-w-[400px]"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          className="mb-3"
          render={({ field }) => (
            <FormItem className="mb-3">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your password here"
                  {...field}
                  className="mb-3 max-w-[400px]"
                  type="password"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

// Child component that uses useSearchParams inside Suspense
function LoginWithSearchParams() {
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? "/";

  return (
    <div className="container p-4 mx-auto">
      <div className="max-w-[600px] mx-auto p-[2rem] border rounded-2xl">
        <Tabs defaultValue="login">
          <TabsList>
            <TabsTrigger value="login">Login</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginForm redirectTo={redirectTo} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default function Login() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginWithSearchParams />
    </Suspense>
  );
}
