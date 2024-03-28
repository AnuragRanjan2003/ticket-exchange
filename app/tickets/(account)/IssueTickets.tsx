import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Divide } from "lucide-react";
import React from "react";
import IssueInputField from "./IssueInputField";
import { Button } from "@/components/ui/button";

const IssueTickets = () => {
  return (
    <Card className="w-2/3 ml-2">
      <CardHeader className={cn("flex flex-col")}>
        <CardTitle>Issue Tickets</CardTitle>
        <CardDescription>Issue tickets</CardDescription>
      </CardHeader>
      <CardContent>
        <Separator />
        <div className="overflow-y-auto h-[70vh]">
          {IssueInputField({
            lable: "Train Name",
            placeholder: "AbcExpress",
            desc: "Name of the train in which the ticket is being issued",
          })}
          {IssueInputField({
            lable: "Start Destination",
            placeholder: "Dhanbad",
            desc: "From where the ticket is valid",
          })}
          {IssueInputField({
            lable: "Start Time",
            placeholder: "12-Mar-2024 11:15am",
            desc: "Time of trains arrival at start destination",
          })}
          {IssueInputField({
            lable: "End Destination",
            placeholder: "New Delhi",
            desc: "Till where the ticket is valid",
          })}
          {IssueInputField({
            lable: "End Time",
            placeholder: "16-Mar-2024 17:15am",
            desc: "Time of trains arrival at end destination",
          })}
          {IssueInputField({
            lable: "Issued to",
            placeholder: "e12Cb256....",
            desc: "Public key to whom the ticket is issued",
          })}
          {IssueInputField({
            lable: "Price",
            placeholder: "₹500",
            desc: "Price at which the ticket is issued",
          })}
          <Button>Issue Ticket</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default IssueTickets;
