import { TableCell, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import React from "react";

const AccountDataRow = ({ lable, value }: { lable: string; value: string }) => {
  return (
    <div className="flex justify-between mt-2 mb-2">
      <h2>{lable}</h2>
      <p>{value}</p>
    </div>
  );
};

export default AccountDataRow;
