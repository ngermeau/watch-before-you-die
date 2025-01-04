import "./globals.css";

export const metadata = {
  title: "Watch Before You Die",
  description: "A list of movies to watch before you die",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
