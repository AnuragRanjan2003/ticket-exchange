import { TableHead, TableRow } from "@/components/ui/table";
import React from "react";

const TicketTableHeader = () => {
  return (
    <TableRow>
      <TableHead>Train</TableHead>
      <TableHead>start</TableHead>
      <TableHead>arrival</TableHead>
      <TableHead>end</TableHead>
      <TableHead>deprture</TableHead>
      <TableHead>Price</TableHead>
    </TableRow>
  );
};

export default TicketTableHeader;
