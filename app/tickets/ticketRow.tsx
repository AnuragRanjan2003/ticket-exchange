import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { Ticket } from "@/lib/types/ticket";
import { cn } from "@/lib/utils";
import React from "react";

const TicketRow = ({
  ticket,
  action,
}: {
  ticket: Ticket;
  action: (ticket: Ticket) => void;
}) => {
  return (
    <TableRow key={ticket.id}>
      <TableCell className="font-medium">{ticket.trainName}</TableCell>
      <TableCell>{ticket.start}</TableCell>
      <TableCell>{ticket.startTime}</TableCell>
      <TableCell>{ticket.end}</TableCell>
      <TableCell>{ticket.endTime}</TableCell>
      <TableCell>{`₹ ${ticket.originalCost}`}</TableCell>
      <TableCell>
        <Button
          className={cn("bg-black hover:bg-slate-700 ")}
          onClick={() => {
            action(ticket);
          }}
        >
          Buy
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default TicketRow;
