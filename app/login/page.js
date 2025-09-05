"use client";
import React, { useContext } from "react";
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
import { signin } from "../actions/auth";
import { redirect } from "next/navigation";
import { AppContext } from "@/context/AppContext";

const formSchema = z.object({
  email: z.string().min(6, {
    message: "Email must be at least 6 characters.",
  }),
  password: z
    .string()
    .min(6, { message: "password must be at least 6 characters" }),
});

const registerFormSchema = z.object({
  regFullname: z.string().min(3),
  regEmail: z.string().min(6),
  regPassword: z.string().min(6),
});

const Login = () => {
  const { appData, setAppData } = useContext(AppContext);
  //   const form = useForm({
  //     resolver: zodResolver(formSchema),
  //     defaultValues: {
  //         email: "",
  //         password: "",
  //     }
  //   });

  const JWT_SECRET = "qwertyuiopasdfghjklzxcvbnm123456";

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });

  const registerForm = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      regFullname: "",
      regEmail: "",
      regPassword: "",
    },
  });

  async function onSubmit(data) {
    try {
      const response = await fetch("/api/products", {
        method: "POST",
      });
      if (response.status == 200) {
        const data = await response.json();
        console.log("Success");
        console.log({data});
      }
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }

  //   async function onSubmit(data) {
  //     const _user = await signin(data);
  //     console.log("user", _user);
  //     const user = localStorage.getItem("user");
  //     if (user != null) {
  //       console.log("user found in localStorage. user: ", user);
  //       localStorage.removeItem("user");
  //     } else {
  //       console.log("user not found in localStorage");
  //     }
  //     localStorage.setItem("user", JSON.stringify(_user));
  //     console.log("user", _user);
  //     setAppData({
  //       ...appData,
  //       user: _user,
  //     });
  //     redirect("/products");
  //   }

  return (
    <div className="container p-4 mx-auto">
      <div className="max-w-[600px] mx-auto p-[2rem] border rounded-2xl">
        <Tabs defaultValue="login">
          <TabsList>
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
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
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </TabsContent>
          <TabsContent value="register">
            <Form {...registerForm}>
              <form onSubmit={registerForm.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="regFullname"
                  className="mb-3"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your full name here"
                          className="mb-3 max-w-[400px]"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="regEmail"
                  className="mb-3"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your email here"
                          className="mb-3 max-w-[400px]"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="regPassword"
                  className="mb-3"
                  render={({ field }) => (
                    <FormItem className="mb-3">
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your password here"
                          className="mb-3 max-w-[400px]"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Login;
