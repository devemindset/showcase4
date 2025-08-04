import type { NextPage } from "next";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import SidebarNav from "../../components/Header";
import Contact from "../../components/Contact";



const Page: NextPage = () => {
    
    
  return (
    <>
    <SidebarNav />
    <Contact />
    <ContactForm />
    <Footer />
    </>
  )
}

export default Page