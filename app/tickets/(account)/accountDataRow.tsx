import { TableCell, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import React from "react";

const AccountDataRow = ({ lable, value }: { lable: string; value: string }) => {
  return (
    <TableRow>
      <TableCell className={cn("font-semibold")}>{lable}</TableCell>
      <TableCell className={cn("text-right")}>{value}</TableCell>
    </TableRow>
  );
};

export default AccountDataRow;
