export const metadata = {
  title: "Zonix",
  description: "Zoning map app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
