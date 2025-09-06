"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCustomer } from "@/context/CustomerContext";
import { PackageOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MyAccount = () => {
  const { user } = useCustomer();
  const { firstName, lastName, email, username, image } = user;
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-3">My Account</h2>
      <Card className="mb-3">
        <CardContent className="flex flex-row gap-3">
          <div>
            <Image src={image} height={100} width={100} alt="Avatar" />
          </div>
          <div>
            <p>
              <span className="font-bold">First Name: </span>
              <span>{firstName}</span>
            </p>
            <p>
              <span className="font-bold">Last Name: </span>
              <span>{lastName}</span>
            </p>
            <p>
              <span className="font-bold">Email: </span>
              <span>{email}</span>
            </p>
            <p>
              <span className="font-bold">Username: </span>
              <span>{username}</span>
            </p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex flex-row gap-3">
          <span className="font-semibold">Your orders:{" "}</span>
          <Button variant="outline">
            <PackageOpen fill="yellow" size={48} />
            <a href="/orders" className="underline text-blue-500">Track or buy things again!</a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default MyAccount;
