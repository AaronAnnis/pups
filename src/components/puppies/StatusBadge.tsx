const styles = {
  Available: "bg-status-available/15 text-status-available",
  Reserved: "bg-status-reserved/15 text-status-reserved",
  Sold: "bg-status-sold/15 text-status-sold",
} as const;

export function StatusBadge({ status }: { status: "Available" | "Reserved" | "Sold" }) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  );
}
