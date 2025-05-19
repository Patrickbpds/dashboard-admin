"use client";

import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export function ChartPie({ data }) {
  console.log(data);
  const processedData = data.map((item, i) => {
    const index = 1 + i;
    return {
      ...item,
      total: parseInt(item.total, 10),
      fill: `hsl(var(--chart-${index}))`,
    };
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Subscriptions Breakdown</CardTitle>
        <CardDescription>
          Showing total subscriptions for all time
        </CardDescription>
      </CardHeader>
      <CardContent>
        <PieChart width={730} height={250}>
          <Pie
            data={processedData}
            dataKey="total"
            nameKey="plan"
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#8884d8"
          />
        </PieChart>
      </CardContent>
    </Card>
  );
}
