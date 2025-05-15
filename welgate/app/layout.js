import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Preloader from "@/components/common/Preloader";
import Scrolltop from "@/components/Scroll/Scrolltop";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Welgate Lifestyle | Most Trusted Organic Grocery Store",
  description: "Health Supplement",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

    <link rel="shortcut icon" type="image/x-icon" href="/assets/img/welgate-favicon2.png"/>

    <link rel="stylesheet" href="/assets/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="/assets/css/animate.min.css"/>
    <link rel="stylesheet" href="/assets/css/magnific-popup.css"/>
    <link rel="stylesheet" href="/assets/css/fontawesome-all.min.css"/>
    <link rel="stylesheet" href="/assets/css/flaticon.css"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@flaticon/flaticon@1.0.0/css/flaticon.min.css"></link>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/phosphor-icons@2.0.0/dist/phosphor.css"></link>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>


    <link rel="stylesheet" href="/assets/css/jquery-ui.css"/>
    <link rel="stylesheet" href="/assets/css/odometer.css"/>
    <link rel="stylesheet" href="/assets/css/slick.css"/>
    <link rel="stylesheet" href="/assets/css/default.css"/>
    <link rel="stylesheet" href="/assets/css/style.css"/>
    <link rel="stylesheet" href="/assets/css/responsive.css"/>


      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
       <Header/>
        {children}

        <Preloader/>
        
        <Scrolltop/>
<Footer/>
        <Script src="/assets/js/vendor/jquery-3.6.0.min.js"></Script>
        <Script src="/assets/js/bootstrap.min.js"></Script>
        <Script src="/assets/js/isotope.pkgd.min.js"></Script>
        <Script src="/assets/js/imagesloaded.pkgd.min.js"></Script>
        <Script src="/assets/js/jquery.magnific-popup.min.js"></Script>
        <Script src="/assets/js/jquery.odometer.min.js"></Script>
        <Script src="/assets/js/jquery.appear.js"></Script>
        <Script src="/assets/js/jquery.paroller.min.js"></Script>
        <Script src="/assets/js/jquery.easypiechart.min.js"></Script>
        <Script src="/assets/js/jquery.inview.min.js"></Script>
        <Script src="/assets/js/jquery.easing.js"></Script>
        <Script src="/assets/js/jquery-ui.min.js"></Script>
        <Script src="/assets/js/svg-inject.min.js"></Script>
        <Script src="/assets/js/jarallax.min.js"></Script>
        <Script src="/assets/js/slick.min.js"></Script>
        <Script src="/assets/js/validator.js"></Script>
        <Script src="/assets/js/ajax-form.js"></Script>
        <Script src="/assets/js/wow.min.js"></Script>
        <Script src="/assets/js/main.js"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></Script>
        

        {/* <Script>
            SVGInject(document.querySelectorAll("img.injectable"));
        </Script> */}



      </body>
    </html>
  );
}
