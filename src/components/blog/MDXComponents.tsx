import type {
  AnchorHTMLAttributes,
  HTMLAttributes,
  ImgHTMLAttributes,
} from "react";

export const mdxComponents = {
  h1: ({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="mt-8 mb-4 text-[clamp(24px,3.5vw,32px)] font-extrabold text-text-heading"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="mt-10 mb-4 border-b border-divider pb-2 text-2xl font-bold text-text-heading"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="mt-8 mb-3 text-xl font-semibold text-text-heading"
      {...props}
    >
      {children}
    </h3>
  ),
  a: ({
    children,
    href,
    ...props
  }: AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      href={href}
      className="text-teal-700 underline underline-offset-3 transition-colors hover:text-gold-500 dark:text-teal-300"
      {...props}
    >
      {children}
    </a>
  ),
  blockquote: ({ children, ...props }: HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="my-6 border-s-[3px] border-gold-500 ps-5 text-text-muted italic"
      {...props}
    >
      {children}
    </blockquote>
  ),
  img: ({ src, alt, ...props }: ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt ?? ""}
      className="my-6 max-w-full rounded-xl shadow-[var(--shadow-md)]"
      {...props}
    />
  ),
  hr: (props: HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-10 border-divider" {...props} />
  ),
};
