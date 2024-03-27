import React from "react";

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
import { SearchIcon } from "lucide-react";

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

const Tickets = () => {
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
            <TableHeader className="">
              <TicketTableHeader />
            </TableHeader>
            <TableBody>{list.map((ticket) => TicketRow({ ticket }))}</TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="my tickets">
          <p>My Tickets</p>
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default Tickets;
