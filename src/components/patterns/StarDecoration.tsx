import { cn } from "@/lib/utils";

/** Eight-pointed star — corner accent / list marker. Gold, low opacity. */
export function StarDecoration({
  size = 30,
  outline = false,
  className,
  style,
}: {
  size?: number;
  outline?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none inline-block bg-center bg-no-repeat",
        className,
      )}
      style={{
        width: size,
        height: size,
        backgroundImage: `url(/patterns/${outline ? "star-8-outline" : "star-8"}.svg)`,
        backgroundSize: "contain",
        ...style,
      }}
    />
  );
}
