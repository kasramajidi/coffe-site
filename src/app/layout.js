import "./globals.css";

import Navbar from "@/components/navbar";

export const metadata = {
  title: "سایت فروشگاه قهوه",
  description: "فروشگاه قهوه و لوازم جانبی قهوه",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <div>
        <Navbar/>
        {children}
        </div>
      </body>
    </html>
  );
}
