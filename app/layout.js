
import { AuthProvider } from "./Provider";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/header"
import Footer from "./components/footer";
import { ToastProvider } from "../app/components/ui/toast"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <AuthProvider> <ToastProvider>{children}</ToastProvider></AuthProvider>
        <Footer/>
      </body>
    </html>
  );
}

