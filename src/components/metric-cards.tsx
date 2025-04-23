export type Metric = {
  title: string;
  value: string | number;
  change: string;
  icon?: React.ReactNode;
};
export function MetricCards({ metrics }: { metrics: Metric[] }) {
  return (
    <div>
      {metrics.map((metric, index) => (
        <div key={index}>
          <div>
            <div>{metric.title}</div>
            {metric.icon ? metric.icon : null}
          </div>
          <div>
            <div>{metric.value}</div>
            {metric.change && <p>{metric.change}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
