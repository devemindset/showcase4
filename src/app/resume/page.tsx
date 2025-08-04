import type { NextPage } from "next";
import SidebarNav from "../../components/Header";
import ResumeList from "../../components/ResumeList";
import Footer from "../../components/Footer";




const Page: NextPage = () => {
    
  return (
    <>
    <SidebarNav />
    <ResumeList />
    <Footer />
    </>
  )
}

export default Page