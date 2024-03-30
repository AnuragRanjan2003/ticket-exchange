"use client";
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
import { Divide, Loader2 } from "lucide-react";
import React, { useState } from "react";
import IssueInputField from "./IssueInputField";
import { Button } from "@/components/ui/button";
import { User } from "@/lib/types/user";
import "dotenv/config";
import { Ticket } from "@/lib/types/ticket";
import ShortUniqueId from "short-unique-id";
import { issueTicket } from "@/lib/contract/functions/IssueTicket";
import { initializeContract } from "@/lib/contract/contract";
import { createProvider } from "@/lib/contract/CreateProvider";

const IssueTickets = ({ user }: { user: User }) => {
  let contractOwner = process.env.NEXT_PUBLIC_CONTRACT_OWNER;
  let trainName = "";
  let start = "";
  let startTime = 0;
  let end = "";
  let endTime = 0;
  let price = 0;
  let to = "";

  return (
    <Card className="w-2/3 ml-2">
      <CardHeader className={cn("flex flex-col")}>
        <CardTitle>Issue Tickets</CardTitle>
        <CardDescription>Issue tickets</CardDescription>
      </CardHeader>
      <CardContent>
        <Separator />
        {contractOwner == undefined ||
        contractOwner.toLowerCase() != user.publicKey.toLowerCase() ? (
          <div className="flex flex-col justify-center items-center h-[70vh] w-full">
            <h2>Not Available</h2>
          </div>
        ) : (
          <div className="overflow-y-auto h-[70vh]">
            {IssueInputField(
              {
                lable: "Train Name",
                placeholder: "AbcExpress",
                desc: "Name of the train in which the ticket is being issued",
              },
              (e) => {
                trainName = e;
              }
            )}
            {IssueInputField(
              {
                lable: "Start Destination",
                placeholder: "Dhanbad",
                desc: "From where the ticket is valid",
              },
              (e) => {
                start = e;
              }
            )}
            {IssueInputField(
              {
                lable: "Start Time",
                placeholder: "12-Mar-2024 11:15am",
                desc: "Time of trains arrival at start destination",
              },
              (e) => {
                startTime = 12;
              }
            )}
            {IssueInputField(
              {
                lable: "End Destination",
                placeholder: "New Delhi",
                desc: "Till where the ticket is valid",
              },
              (e) => {
                end = e;
              }
            )}
            {IssueInputField(
              {
                lable: "End Time",
                placeholder: "16-Mar-2024 17:15am",
                desc: "Time of trains arrival at end destination",
              },
              (e) => {
                endTime = 25;
              }
            )}
            {IssueInputField(
              {
                lable: "Issued to",
                placeholder: "e12Cb256....",
                desc: "Public key to whom the ticket is issued",
              },
              (e) => {
                to = e;
              }
            )}
            {IssueInputField(
              {
                lable: "Price",
                placeholder: "₹500",
                desc: "Price at which the ticket is issued",
              },
              (e) => {
                price = Number(e);
              }
            )}
            <Button
              onClick={() => {
                if (
                  to.length == 0 ||
                  price == 0 ||
                  start.length == 0 ||
                  end.length == 0 ||
                  trainName.length == 0
                ) {
                  alert("field is empty");
                  return;
                }
                const uid = new ShortUniqueId({ length: 10 });
                let ticket: Ticket = {
                  id: uid.rnd(),
                  trainName: trainName,
                  originalCost: price,
                  start: start,
                  startTime: startTime,
                  end: end,
                  endTime: endTime,
                };
                console.log(ticket);
                const contract = initializeContract(
                  createProvider(process.env.NEXT_PUBLIC_ALCHEMY_URL!),
                  process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!,
                  user.privateKey
                );

                issueTicket(ticket, to, contract)
                  .then((ticket) => {
                    console.log("added to bc" + ticket);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              {/* <Loader2 className="mr-2 h-4 w-4 animate-spin" /> */}
              Issue Ticket
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default IssueTickets;
