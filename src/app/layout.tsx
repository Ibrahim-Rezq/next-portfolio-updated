// Required by Next.js for root-level routes (e.g., not-found.tsx).
// The real layout with <html>, <body>, providers is in [locale]/layout.tsx.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
