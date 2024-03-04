import { Inter } from "next/font/google";

import Head from "next/head";
import Navbar from "./Components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Best Web Development Services Kochi | Web Designing Services Kochi - Illford Technologies",
  description: "Revolutionize your digital sphere with Illford Technologies – The best Web Development Services Kochi, Web designing experts in Kochi and Digital marketing experts in Kochi. Express your digital identity through innovation and excellence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="title" content="The Best Web Development Services Kochi | Web Designing Services Kochi - Illford Technologies" />

      <meta name="keywords" content="Web Development Agency Kochi, Web Development Agency Kerala, Web Designing Agency Kochi, UI/UX Designing Kochi, Digital Marketing Specialist Kochi, Top Web Development Services Kochi, Web designing experts in Ernakulam, Digital Marketing Services in Kerala, Website  development experts in Kerala, App development company in Ernakulam" />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="15 days" />
      <meta name="author" content="Illford Technologies" />
      <meta name="content-language" content="english" />
      <meta name="rating" content="General" />
      <link rel="canonical" href="https://illfordtechnologies.in/services" />
      <meta name="DC.title" content="Website Designing services Kochi and Website development services Ernakulam | Illford Technologies" />
      <meta name="geo.region" content="IN-KL" />
      <meta name="geo.placename" content="Kochi" />
      <meta name="geo.position" content="9.967428;76.245444" />
      <meta name="ICBM" content="9.967428, 76.245444" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://illfordtechnologies.in/services" />
      <meta property="og:title" content="Website Designing services Kochi and Website development services Ernakulam | Illford Technologies" />
      <meta property="og:description" content="Illford Technologies: Elevate your online presence with Web Design Company Kochi and Web Development Services Kochi. Our commitment extends to strategic marketing and reliable digital marketing services Kochi offering a holistic online experience." />
      <meta property="og:image" content="" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://illfordtechnologies.in/services" />
      <meta property="twitter:title" content="Website Designing services Kochi and Website development services Ernakulam | Illford Technologies" />
      <meta property="twitter:description" content="Illford Technologies: Elevate your online presence with Web Design Company Kochi and Web Development Services Kochi. Our commitment extends to strategic marketing and reliable digital marketing services Kochi offering a holistic online experience." />
      <meta property="twitter:image" content="" />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Nunito+Sans:opsz@6..12&family=Poppins:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;0,800;1,300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
