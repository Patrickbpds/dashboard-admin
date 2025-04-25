import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export type User = {
  id: number;
  firstName?: string;
  lastName?: string;
  lastSignInAt: number;
  emailAddresses: {
    id: number;
    emailAddress: string;
    [key: string]: unknown;
  }[];
  [key: string]: unknown;
};

export function UsersTable({ data }: { data: User[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>User</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Last Seen</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((user) => (
          <TableRow key={user.id}>
            <TableCell>
              <Avatar className="h-9 w-9">
                <AvatarImage
                  src="/globe.svg"
                  alt={`${user.firstName} ${user.lastName}`}
                ></AvatarImage>
                <AvatarFallback>
                  {user.firstName ? user.firstName[0] : ""}
                </AvatarFallback>
              </Avatar>
              {user.firstName} {user.lastName}
            </TableCell>
            <TableCell>{user.emailAddresses[0].emailAddress}</TableCell>
            <TableCell>
              {new Date(user.lastSignInAt).toLocaleString()}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
