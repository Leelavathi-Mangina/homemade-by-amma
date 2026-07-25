import { Poppins } from "next/font/google";
import { AuthProvider } from "../context/AuthContext";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Homemade by Amma",
  description:
    "Fresh homemade food for weddings, festivals, birthdays and family celebrations.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AuthProvider>
          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}