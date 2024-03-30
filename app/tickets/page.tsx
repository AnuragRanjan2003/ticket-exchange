"use client";

import React, { useEffect, useState } from "react";
import "dotenv/config";

import { Ticket } from "@/lib/types/ticket";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
} from "@/components/ui/table";
import TicketTableHeader from "./ticketTableHeader";
import TicketRow from "./ticketRow";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RefreshCwIcon, RefreshCwOffIcon, SearchIcon } from "lucide-react";
import MyTicketRow from "./MyTicketRow";
import MyAccount from "./(account)/myAccount";
import { User } from "@/lib/types/user";
import { Contract } from "ethers";
import { initializeContract } from "@/lib/contract/contract";
import { createProvider } from "@/lib/contract/CreateProvider";
import { getTicketForUser } from "@/lib/contract/functions/GetTicketsForUser";

const list: Ticket[] = [];

const tickets = 20;

for (let i = 0; i < tickets; i++) {
  list.push({
    id: `${i}`,
    trainName: `Train ${i}`,
    start: "a",
    end: "b",
    startTime: 0,
    endTime: 5,
    originalCost: 50,
  });
}

const action = (t: Ticket) => {
  alert(t.id);
};

const cancel = (t: Ticket) => {
  alert(t.id);
};

let name = "";
let sk = "";
let pk = "";

const Tickets = () => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [contract, setContract] = useState<Contract | undefined>(undefined);
  const [tickets, setTickets] = useState<Ticket[]>(Array<Ticket>());

  useEffect(() => {
    name = localStorage.getItem("name")!;
    sk = localStorage.getItem("sk")!;
    pk = localStorage.getItem("pk")!;
    console.log("effect triggered");
    let user: User = {
      name: name,
      publicKey: pk,
      privateKey: sk,
    };
    setUser(user);
    let provider = createProvider(process.env.NEXT_PUBLIC_ALCHEMY_URL!);
    let contract = initializeContract(
      provider,
      process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!,
      sk
    );
    setContract(contract);
  }, []);

  if (user == undefined || contract == undefined) {
    return (
      <main className="flex flex-col justify-center items-center h-[100vh]">
        <h2>Loading...</h2>
      </main>
    );
  }

  return (
    <main className="pr-10 pl-10 pt-5 w-[100vw]">
      <p className="text-3xl font-bold">Buy Tickets</p>
      <Tabs defaultValue="tickets" className="mt-8">
        <div className="flex justify-between">
          <TabsList className="w-[30vw]">
            <TabsTrigger value="tickets" className="w-1/3">
              Tickets
            </TabsTrigger>
            <TabsTrigger value="my tickets" className="w-1/3">
              My Tickets
            </TabsTrigger>
            <TabsTrigger value="account" className="w-1/3">
              Account
            </TabsTrigger>
          </TabsList>
          <div className="flex justify-between">
            <Input placeholder="search train" className="w-[30vw] mr-2" />
            <Button variant={"outline"}>
              <SearchIcon className="h-4" />
            </Button>
          </div>
        </div>
        <TabsContent value="tickets">
          <Table>
            <TableHeader>
              <TicketTableHeader />
            </TableHeader>
            <TableBody>
              {list.map((ticket) => TicketRow({ ticket, action }))}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="my tickets">
          <Button
            variant={"outline"}
            size={"icon"}
            onClick={() => {
              const newContract = initializeContract(
                createProvider(process.env.NEXT_PUBLIC_ALCHEMY_URL!),
                process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!,
                user.privateKey
              );

              console.log(newContract);
              getTicketForUser(user.publicKey, newContract)
                .then((data) => {
                  console.log(data);
                  setTickets(data);
                })
                .catch((err) => {
                  console.log("error: " + err);
                });
            }}
          >
            <RefreshCwIcon className="h-4 w-4" />
          </Button>
          <Table>
            <TableHeader>
              <TicketTableHeader />
            </TableHeader>
            <TableBody>
              {tickets.map((ticket) => MyTicketRow({ ticket, cancel }))}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="account">{MyAccount({ user })}</TabsContent>
      </Tabs>
    </main>
  );
};

export default Tickets;
