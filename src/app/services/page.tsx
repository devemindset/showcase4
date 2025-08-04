import type { NextPage } from "next";
import SidebarNav from "../../components/Header";
import ServiceList from "../../components/ServiceList";
import Footer from "../../components/Footer";



const Page: NextPage = () => {
    
  return (
    <>
    <SidebarNav />
    <ServiceList />
    <Footer />
    </>
  )
}

export default Page