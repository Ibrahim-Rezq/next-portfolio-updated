import Image from "next/image";
import { cn } from "@/lib/utils";

/** IA monogram (transparent — reads on both cream and charcoal). */
export function Logo({
  size = 32,
  className,
  priority = false,
}: {
  size?: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/logo-ia-monogram-transparent.png"
      alt="Ibrahim Amin"
      width={size}
      height={size}
      priority={priority}
      className={cn("object-contain", className)}
    />
  );
}
