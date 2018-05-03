import { User } from ".";

export class Change {
    id: string;
    changedId: string;
    property: string;
    user: User;
    date: Date;
}