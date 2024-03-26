import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

interface Ticket {
  id: string;
  start: string;
  end: string;
  time: number;
}

const TicketCard = ({ ticket }: { ticket: Ticket }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{ticket.id}</CardTitle>
        <CardDescription>A simple ticket</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between">
          <strong>start</strong>
          <p>{ticket.start}</p>
        </div>
        <br></br>
        <div className="flex justify-between">
          <strong>end</strong>
          <p>{ticket.end}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-1/2">Buy</Button>
      </CardFooter>
    </Card>
  );
};

export default TicketCard;
