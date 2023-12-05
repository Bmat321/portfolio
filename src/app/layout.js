// import { Toaster } from "react-hot-toast";
import { ToastBar, Toaster } from "react-hot-toast";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio",
  description: "This is my development portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
        {children}
      </body>
    </html>
  );
}
