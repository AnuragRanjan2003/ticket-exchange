import React from "react";
import TicketCard from "./_ticketCard";

class Ticket {
  id: string = "";
  start: string = "";
  end: string = "";
  time: number = 0;

  constructor(_id: string, _start: string, _end: string, _time: number) {
    this.id = _id;
    this.start = _start;
    this.end = _end;
    this.time = _time;
  }
}

const list: Ticket[] = [
  new Ticket("1", "abc", "pqr", 12),
  new Ticket("2", "ab3c", "pdqr", 22),
  new Ticket("3", "ab1c", "pqdr", 12),
  new Ticket("4", "a1bc", "pqr", 15),
  new Ticket("4", "a1bc", "pqr", 15),
  new Ticket("4", "a1bc", "pqr", 15),
  new Ticket("4", "a1bc", "pqr", 15),
  new Ticket("4", "a1bc", "pqr", 15),
];

const Tickets = () => {
  return (
    <main className="pr-10 pl-10 pt-10 w-[100vw]">
      <p className="text-3xl font-bold">Buy Tickets</p>
      <div className="grid grid-cols-3 gap-8">
        {list.map((ticket) => TicketCard({ ticket }))}
      </div>
    </main>
  );
};

export default Tickets;
