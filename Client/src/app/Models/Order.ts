
class Order {
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
  log: string[];
  comment: string;
  changes: {
    date: Date;
    event: string;
    issuer: string;
  }[];
  dateInbox: Date;
  dateAccepted: Date;
  dateDone: Date;
}
