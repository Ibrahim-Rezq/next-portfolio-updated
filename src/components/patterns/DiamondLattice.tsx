import { cn } from "@/lib/utils";

/** Diamond-lattice divider — a patterned rule instead of a plain <hr>. */
export function DiamondLattice({ className }: { className?: string }) {
  return (
    <div role="separator" aria-hidden className={cn("ia-divider", className)} />
  );
}
