import "../globals.css";
export const metadata = {
  title: "GameHub",
  description: "Find trending games, track your favorites and level up your gaming experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
