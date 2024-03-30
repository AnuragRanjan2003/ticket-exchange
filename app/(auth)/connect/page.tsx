"use client";
import { AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { createProvider } from "@/lib/contract/CreateProvider";
import { getBalance } from "@/lib/contract/getBalance";
import "dotenv/config";
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
import { useState } from "react";
import { useRouter } from "next/navigation";

const Connect = () => {
  const [name, setName] = useState<string>("");
  const [pk, setPk] = useState<string>("");
  const [sk, setSk] = useState<string>("");
  const router = useRouter();

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
            <Input
              className=""
              placeholder="a31f45Ef...."
              id="pk"
              onChange={(e) => {
                setPk(e.target.value);
              }}
            />
            <p className="mt-4 mb-4"></p>
            <Label htmlFor="name" className="mt-2">
              Display Name
            </Label>
            <Input
              placeholder="Jhon Doe"
              id="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <p className="mt-4 mb-4"></p>
            <Label htmlFor="sk">Private Key</Label>
            <Input
              placeholder="e30f45Ef...."
              id="sk"
              onChange={(e) => {
                setSk(e.target.value);
              }}
            />
          </div>

          <Button
            className="w-full mt-4"
            onClick={() => {
              if (name.length == 0 || pk.length == 0 || sk.length == 0) return;
              localStorage.setItem("name", name);
              localStorage.setItem("sk", sk);
              localStorage.setItem("pk", pk);
              router.push("/tickets");
            }}
          >
            Submit
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
