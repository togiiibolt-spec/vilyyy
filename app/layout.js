import "./globals.css";

export const metadata = {
  title: "VILY — Movies & Series",
  description: "VILY movies and series streaming interface"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
