import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { Ticket } from "@/lib/types/ticket";
import React from "react";

const MyTicketRow = ({
  ticket,
  cancel,
}: {
  ticket: Ticket;
  cancel: (ticket: Ticket) => void;
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
          variant={"destructive"}
          onClick={() => {
            cancel(ticket);
          }}
        >
          Cancel
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default MyTicketRow;
