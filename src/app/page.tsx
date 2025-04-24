import { MetricCards, type Metric } from "../components/metric-cards";
import { UsersTable, type User } from "../components/users-table";
import { Users, DollarSign, CreditCard, Activity } from "lucide-react";

const metrics: Metric[] = [
  {
    title: "users",
    value: 500,
    change: "+60% from last month",
    icon: <Users className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: "Subscription",
    value: 300,
    change: "+100% from last month",
    icon: <CreditCard className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: "Revenue",
    value: "$200",
    change: "+200% from last year",
    icon: <DollarSign className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: "Last Month Subscriptions",
    value: 30,
    change: "+10% from last week",
    icon: <Activity className="h-4 w-4 text-muted-foreground" />,
  },
];
const users: User[] = [
  {
    id: 1,
    firstName: "Patrick",
    lastName: "Silva",
    lastSignInAt: 1708423800000,
    emailAddresses: [
      {
        id: 101,
        emailAddresses: "patrick.silva@example.com",
      },
    ],
  },
  {
    id: 2,
    firstName: "Alice",
    lastName: "Smith",
    lastSignInAt: 1708356300000,
    emailAddresses: [
      {
        id: 201,
        emailAddresses: "alice.sm@company.com",
      },
      {
        id: 202,
        emailAddresses: "alice.smith@personal.com",
      },
    ],
  },
];

export default function Home() {
  return (
    <main className="container mx-auto p-4 space-y-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <MetricCards metrics={metrics} />
      <div>
        <UsersTable data={users} />
      </div>
    </main>
  );
}
