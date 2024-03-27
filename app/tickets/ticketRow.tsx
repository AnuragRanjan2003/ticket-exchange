import { TableCell, TableRow } from "@/components/ui/table";
import { Ticket } from "@/lib/types/ticket";

const TicketRow = ({ ticket }: { ticket: Ticket }) => {
  return (
    <TableRow key={ticket.id}>
      <TableCell className="font-medium">{ticket.trainName}</TableCell>
      <TableCell>{ticket.start}</TableCell>
      <TableCell>{ticket.startTime}</TableCell>
      <TableCell>{ticket.end}</TableCell>
      <TableCell>{ticket.endTime}</TableCell>
      <TableCell>{`₹ ${ticket.originalCost}`}</TableCell>
    </TableRow>
  );
};

export default TicketRow;
