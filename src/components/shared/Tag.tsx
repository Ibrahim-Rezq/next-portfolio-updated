import { cn } from "@/lib/utils";

/** Tech chip — sunken surface, muted ink, mono-friendly. Used for stacks. */
export function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-brand-border bg-surface-sunken px-2.5 py-1 text-xs font-medium text-text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
