import Head from "next/head";
import { ToastContainer } from "react-toastify";

import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { AboutUs } from "@/components/AboutUs/AboutUs";
import { Reviews } from "@/components/Reviews/Reviews";
import { Contacts } from "@/components/Contacts/Contacts";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Confetti</title>
        <meta name="description" content="Confetti - test task" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer />
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Reviews />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
