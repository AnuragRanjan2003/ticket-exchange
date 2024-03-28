"use client";
import { AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import React from "react";

const Connect = () => {
  return (
    <main className="bg-gray-100 flex flex-col justify-center items-center h-screen">
      <Card className="w-[50vw]  flex flex-col items-center justify-evenly pt-5 pb-5">
        <CardHeader className="flex flex-col items-center">
          <Avatar>
            <AvatarImage src="" alt="avatar"></AvatarImage>
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <CardTitle>Connect Your Wallet</CardTitle>
          <CardDescription>Create a connection to your wallet</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-[300px]">
            <Label htmlFor="pk">Public Key</Label>
            <Input className="" placeholder="a31f45Ef...." id="pk" />
            <p className="mt-4 mb-4"></p>
            <Label htmlFor="name" className="mt-2">
              Display Name
            </Label>
            <Input placeholder="Jhon Doe" id="name" />
            <p className="mt-4 mb-4"></p>
            <Label htmlFor="sk">Private Key</Label>
            <Input placeholder="e30f45Ef...." id="sk" />
          </div>

          <Button asChild className="w-full mt-4">
            <Link href="/tickets">Submit</Link>
          </Button>
          <Button variant={"outline"} className="w-full mt-4">
            Connect MetaMask
          </Button>
        </CardContent>
        <CardFooter>
          <Button variant={"link"} asChild>
            <Link href="/">Go Back</Link>
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
};

export default Connect;
