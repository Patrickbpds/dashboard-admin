export type Metric = {
  title: string;
  value: string | number;
  change: string;
  icon?: React.ReactNode;
};
export function MetricCards({ metrics }: { metrics: Metric[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric, index) => (
        <div key={index} className="border border-black">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="text-sm font-medium">{metric.title}</div>
            {metric.icon ? metric.icon : null}
          </div>
          <div>
            <div className="text-2xl font-bold">{metric.value}</div>
            {metric.change && (
              <p className="text=xs text-muted-foreground">{metric.change}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
