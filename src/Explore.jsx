import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../src/utils/motion';
import styles from './index';
import { TypingText, TitleText } from './CustomText';
import { ExploreCard } from './Card';
import { exploreWorlds } from './constants/index';

const Explore = () => {
    const [active, setActive] = useState('world-2'); // Utilisation correcte de useState

    return (  
        <section className={`${styles.paddings}`} id="explore">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col `}
            >
                <TypingText title="| The World" textStyles="text-center" />
                <TitleText
                    title={<>Choose the world you want <br className="md:block hidden"/> to explore</>}
                    textStyles="text-center"
                />
                <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
                    {exploreWorlds.map((world, index) => (
                        <ExploreCard
                            key={world.id}
                            {...world}
                            active={active}
                            handleClick={setActive} // Utilisation correcte de setActive
                        /> // Ajout de la balise fermante
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
 
export default Explore;
