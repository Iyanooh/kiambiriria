import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "P.C.E.A GEOFFREY GATHU MEMORIAL CHURCH",
  description: "Official website of Grace Gospel Mission Church",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="pt-16 bg-blue-50 text-gray-800">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
