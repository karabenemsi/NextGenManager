import { Log } from ".";

export class Order {
  id: string;
  title: string;
  details: string;
  number: number;
  assignees: {
    technical: string[],
    coach: string[],
    buisness: string[]
  };
  customer: string;
  log: Log[];
  comment: string;
  dateInbox: Date;
  dateAccepted: Date;
  dateDone: Date;
}
