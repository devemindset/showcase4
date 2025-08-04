"use client"
import type { FC } from 'react';
import ProductCard from './ProductCard';
import {motion} from "framer-motion"

const productList = [
    {
    imageSrc : "/product1.jpg",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, deserunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, deserunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, deserunt.",
    path : "/"
    },
    {
    imageSrc : "/product2.jpg",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, deserunt.",
    path : "/"
    },
    {
    imageSrc : "/hero-bg.jpg",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, deserunt.",
    path : "/"
    },
    {
    imageSrc : "/hero-bg.jpg",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, deserunt.",
    path : "/"
    },
    {
    imageSrc : "/hero-bg.jpg",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, deserunt.",
    path : "/"
    },
]

const ProductList: FC = () => {
        return (
            <section className='my-5 sm:my-20 py-10 min-h-screen w-full lg:w-[80%]' >
                <div className=' text-center'>
                    <motion.h2 className='text-center py-5 my-5  text-3xl sm:py-10 font-bold sm:text-4xl '
                    initial= {{ opacity:0, y: 40 }}
                    animate = {{opacity : 1, y: 0}}
                    transition={{ duration:1, delay:0.3}}
                    >Portfolio</motion.h2>
                    <motion.p className='text-xl px-5 text-[var(--text-element-small-black)]'
                    initial= {{ opacity:0, y: 40 }}
                    animate = {{opacity : 1, y: 0}}
                    transition={{ duration:1, delay:0.3}}
                    >Lorem, ipsum dolor sit amet consectetur adipisicing elit.</motion.p>
                </div>
                {/* list  */}
                <div className='mt-20 flex justify-center flex-wrap gap-2 sm:px-10  justify-items-center'>

                
                {productList.map((product,index) => (
                    <ProductCard key={ index} imageSrc={product.imageSrc} description={product.description} path={product.path} />
                ))

                }
                </div>
            </section>
        );
}
export default ProductList;