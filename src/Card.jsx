import { motion } from 'framer-motion';
import styles from './index';
import { fadeIn } from './utils/motion';
import headset from '../public/headset.svg';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer overflow-hidden`}
    onClick={() => handleClick(id)}
  >
    <img 
      src={imgUrl}
      alt={title}
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-10 bottom-0 p-8 justify-start w-full bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px] ">
        <div className={`${styles.flexCenter} w-full [60px] h-[60px] mb-[16px]`}>
          <img
            src={headset}
            alt="headset"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
        <p className="font-normal text-[16px] leading-[20px] text-white uppercase">
        Enter the Multiverse !
        </p>
        <h2 className="font-semibold sm:text-[26px] text-[18px] text-white z-0">
            {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export { ExploreCard }; // Exportez ExploreCard correctement
