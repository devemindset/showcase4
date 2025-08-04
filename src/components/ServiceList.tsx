"use client"
import type { FC } from 'react';
import Service from './Service';
import {motion} from 'framer-motion'
import OkIcon from './ui/OkIcon';

const serviceList = [
    {
        icon : <OkIcon className='w-10 h-10 text-[var(--background-element-3)] bg-[var(--text-span)] rounded-full' />,
        title : "Lorem ipsum",
        description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, doloremque.",
        path : "/",
    },
    {
        icon : <OkIcon className='w-10 h-10 text-[var(--background-element-3)] bg-[var(--text-span)] rounded-full' />,
        title : "Lorem ipsum",
        description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, doloremque.",
        path : "/",
    },
    {
        icon : <OkIcon className='w-10 h-10 text-[var(--background-element-3)] bg-[var(--text-span)] rounded-full' />,
        title : "Lorem ipsum",
        description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, doloremque.",
        path : "/",
    },
    {
        icon : <OkIcon className='w-10 h-10 text-[var(--background-element-3)] bg-[var(--text-span)] rounded-full' />,
        title : "Lorem ipsum",
        description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, doloremque.",
        path : "/",
    },
    {
        icon : <OkIcon className='w-10 h-10 text-[var(--background-element-3)] bg-[var(--text-span)] rounded-full' />,
        title : "Lorem ipsum",
        description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, doloremque.",
        path : "/",
    },
    {
        icon : <OkIcon className='w-10 h-10 text-[var(--background-element-3)] bg-[var(--text-span)] rounded-full' />,
        title : "Lorem ipsum",
        description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, doloremque.",
        path : "/",
    },
    {
        icon : <OkIcon className='w-10 h-10 text-[var(--background-element-3)] bg-[var(--text-span)] rounded-full' />,
        title : "Lorem ipsum",
        description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, doloremque.",
        path : "/",
    },
    {
        icon : <OkIcon className='w-10 h-10 text-[var(--background-element-3)] bg-[var(--text-span)] rounded-full' />,
        title : "Lorem ipsum",
        description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, doloremque.",
        path : "/",
    },
]

const ServiceList: FC = () => {
        return (
            <section className='my-5 sm:my-20 min-h-screen w-full lg:w-[80%]'>
                <motion.div className=' text-center'
   
                >
                    <motion.h2 className='text-center py-5 my-5  text-3xl sm:py-10 font-bold sm:text-4xl'
                    initial= {{ opacity:0, y: 40 }}
                    animate = {{opacity : 1, y: 0}}
                    transition={{ duration:1, delay:0.3}}
                    >Services</motion.h2>
                    <motion.p className='text-xl px-5 text-[var(--text-element-small-black)]'
                    initial= {{ opacity:0, y: 40 }}
                    animate = {{opacity : 1, y: 0}}
                    transition={{ duration:1, delay:0.3}}
                    >Lorem, ipsum dolor sit amet consectetur adipisicing elit.</motion.p>
                </motion.div>
                {/* lists  */}
                <div className='mt-20 flex justify-center flex-wrap gap-2 sm:px-10  justify-items-center'

                >
                    {serviceList.map((service,index) => (
                        <Service key={index} icon={service.icon} title={service.title} description={service.description} path={service.path} />
                    ))
                    }
                </div>
            </section>
        );
}
export default ServiceList;