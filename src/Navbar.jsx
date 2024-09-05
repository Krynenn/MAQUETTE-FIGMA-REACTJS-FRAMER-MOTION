import React from 'react';
import { motion } from 'framer-motion';
import { navVariants } from '../src/utils/motion';
import styles from './index';
import look from '../public/search.svg';
import menu from '../public/menu.svg'


const Navbar = () => {
    return ( 
        
            <motion.nav
                variants={navVariants}
                initial="hidden"
                whileInView="show"
                className={`${styles.xPaddings} py-8 relative`} 
            >
                <div className="absolute w-[50%] inset-0 gradient-01"></div>
                <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
                    <img 
                    src={look} 
                    alt="Logo" 
                    className="w-[24px] h-[24px] object-contain"
                    />
                    <h2 className=" font-extrabold text-[24px]
                    leading-[30px] text-white">METAVERSUS</h2>
                    <img 
                    src={menu}
                    className="w-[24px]] h-[24px] object-contain"
                    />
                    
                </div>
            </motion.nav>
       
    );
};
 
export default Navbar;
