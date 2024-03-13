import localFont from 'next/font/local'
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({children}) {
  return (
      <html>

      <body>

      <div className={"bodyContainer"}>
        <Header/>
        {children}
      </div>
      <Footer/>
      </body>
      </html>
  );
}
