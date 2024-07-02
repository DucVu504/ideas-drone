import Head from 'next/head';
import { Inter } from "next/font/google";
import "../styles/globals.css";


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/Logos/Logo_main.png" type="image/png"/>
        <title>Ideas-Drone</title>
        <meta name="A webSGIS application for drone management and monitoring" content="Web site created..." />
        <link rel="stylesheet" href="https://fonts.googleapis.comHomePage/Icon?family=Material+Icons" />
      </Head>
        <body className={inter.className}>
          {children}
        </body>
    </html>
  );
}

