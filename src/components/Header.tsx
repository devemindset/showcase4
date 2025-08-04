"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import SmartLink from "./ui/SmartLink";

const navItems = [
  { href: "/", label: "Home", icon: "bi-house" },
  { href: "/about", label: "About", icon: "bi-person" },
  { href: "/resume", label: "Resume", icon: "bi-file-earmark-text" },
  { href: "/projects", label: "Portfolio", icon: "bi-images" },
  { href: "/services", label: "Services", icon: "bi-hdd-stack" },
  { href: "/contact", label: "Contact", icon: "bi-envelope" }
];

export default function SidebarNav() {

  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;


  const liVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <>
      {/* Desktop */}
      <aside className="hidden lg:flex fixed top-0 right-0 w-[20%] h-screen bg-[var(--background-element)] text-white flex-col items-center py-8 px-4 space-y-10 z-[9999]">
        <motion.div initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="flex flex-col items-center space-y-2">
          <Image src="./template_4/my-profile-img.jpg" alt="James Smith" width={96} height={96} className="rounded-full border-4" style={{borderColor:"var(--border-color)"}} />
          <span className="font-semibold text-lg text-white">James Smith</span>
        </motion.div>

        <nav className="mt-6 w-full">
          <ul className="flex flex-col items-start space-y-4 px-6">
            {navItems.map((item, i) => (
              <motion.li
                key={item.href}
                variants={liVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1 * i }}
              >
                <SmartLink href={item.href} className={`flex items-center gap-3 text-lg transition-colors duration-300 ${
                  isActive( item.href)
                    ? "text-[var(--text-active)] font-semibold"
                    : "hover:text-[var(--text-active)] text-white"
                }`}>
                  <i className={`bi ${item.icon}`}></i>
                  <span>{item.label}</span>
                </SmartLink>
              </motion.li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Mobile toggle */}
      <button onClick={() => setOpen(!open)} className="lg:hidden fixed top-5 right-5 z-[999] p-2 bg-[var(--background-element)] text-white rounded-full">
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{x:'100%'}} animate={{x:0}} exit={{x:'100%'}} transition={{duration:0.3}} className="lg:hidden fixed top-0 right-0 w-[50%] h-full bg-[var(--background-element)] text-white z-50 flex flex-col pt-10 items-center space-y-5">
            <Image src="./template_4/my-profile-img.jpg" alt="James Smith" width={80} height={80} className="rounded-full border-4" style={{borderColor:"var(--border-color)"}} />
            <span className="font-semibold text-lg">OakNest</span>

            <nav>
              <ul className="flex flex-col space-y-1 text-sm">
                {navItems.map((item, i) => (
                  <motion.li key={item.href} variants={liVariants} initial="hidden" animate="visible" transition={{delay:0.1*i}}>
                    <a href={item.href} onClick={() => setOpen(false)} className={`flex items-center gap-3 transition-colors duration-300 ${
                      isActive( item.href)
                        ? "text-[var(--text-active)] font-semibold"
                        : "hover:text-[var(--text-active)] text-white"
                    }`}>
                      <i className={`bi ${item.icon}`}></i>
                      <span>{item.label}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
