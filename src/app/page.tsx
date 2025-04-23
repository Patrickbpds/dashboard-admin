import { MetricCards, type Metric } from "../components/metric-cards";

const metrics: Metric[] = [
  {
    title: "users",
    value: 500,
    change: "+60% from last month",
  },
  {
    title: "Subscription",
    value: 300,
    change: "+100% from last month",
  },
  {
    title: "Revenue",
    value: "$200",
    change: "+200% from last year",
  },
  {
    title: "Last Month Subscriptions",
    value: 30,
    change: "+10% from last week",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto p-4 space-y-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <MetricCards metrics={metrics} />
    </main>
  );
}
