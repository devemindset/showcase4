import type { NextPage } from "next";

import About from "../../components/About";
import Footer from "../../components/Footer";
import SidebarNav from "../../components/Header";

const Page: NextPage = () => {
  return (
    <>
    <SidebarNav />
    <About />
    <Footer />
    </>
  )
}

export default Page