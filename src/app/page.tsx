import { MetricCards, type Metric } from "../components/metric-cards";
import { UsersTable, type User } from "../components/users-table";
import { Users, DollarSign, CreditCard, Activity } from "lucide-react";
import { AdBanner } from "../components/ad-banner";
import { QuickLinks } from "@/components/quick-links";
import { ChartPie } from "@/components/chart-pie";

import { getSubscriptionsCount } from "@/app/admin/actions";

const users: User[] = [
  {
    id: 1,
    firstName: "Patrick",
    lastName: "Silva",
    lastSignInAt: 1708423800000,
    emailAddresses: [
      {
        id: 101,
        emailAddress: "patrick.silva@example.com",
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
        emailAddress: "alice.sm@company.com",
      },
      {
        id: 202,
        emailAddress: "alice.smith@personal.com",
      },
    ],
  },
];

export default async function Home() {
  const subscriptions = await getSubscriptionsCount();

  const metrics: Metric[] = [
    {
      title: "users",
      value: 500,
      change: "+60% from last month",
      icon: <Users className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Subscription",
      value: subscriptions,
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

  return (
    <main className="container mx-auto p-4 space-y-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <MetricCards metrics={metrics} />
      <div className="flex flex-row items-center md:flex-col space-x-4 space-y-4">
        <AdBanner />
        <QuickLinks />
      </div>
      <div>
        <UsersTable data={users} />
        <ChartPie />
      </div>
    </main>
  );
}
