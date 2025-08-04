import type { NextPage } from "next";
import SidebarNav from "../../components/Header";
import ProductList from "../../components/ProductList";
import Footer from "../../components/Footer";



const Page: NextPage = () => {
    
  return (
    <>
    <SidebarNav />
    <ProductList />
    <Footer />
    </>
  )
}

export default Page