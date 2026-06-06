export default function NotFound() {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: "system-ui, sans-serif",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          margin: 0,
          background: "#FEF8EC",
          color: "#1A1F20",
        }}
      >
        <h1 style={{ fontSize: "4rem", fontWeight: 800, color: "#134E52" }}>
          404
        </h1>
        <p style={{ marginTop: "1rem", fontSize: "1.1rem" }}>Page not found.</p>
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- root not-found is outside [locale] and cannot use next-intl Link */}
        <a
          href="/en"
          style={{
            marginTop: "1.5rem",
            color: "#134E52",
            textDecoration: "underline",
            fontSize: "0.95rem",
          }}
        >
          Go home
        </a>
      </body>
    </html>
  );
}
