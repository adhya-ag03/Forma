import "./globals.css";

export const metadata = {
  title: "Forma — Where design finds its audience",
  description:
    "Forma is a design-inspiration community where designers share their work, discover other creatives, and get hired.",
};

// Apply the saved theme before first paint so there is no flash.
const themeScript = `
try {
  var t = JSON.parse(localStorage.getItem("forma:theme"));
  if (t === "dark" || t === "light") document.documentElement.dataset.theme = t;
} catch (e) {}
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,560;9..144,640&family=Manrope:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
