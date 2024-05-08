import "./globals.css";


export const metadata = {
  title: "سایت فروشگاه قهوه",
  description: "فروشگاه قهوه و لوازم جانبی قهوه",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
