import "./globals.css";
import Sidebar from "../components/Sidebar";

export const metadata = {
  title: "Creator AI Suite",
  description: "Modern AI content creation studio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white flex">
        <Sidebar />
        <main className="flex-1 p-6">{children}</main>
      </body>
    </html>
  );
}
