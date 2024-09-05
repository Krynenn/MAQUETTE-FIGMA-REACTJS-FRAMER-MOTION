import React from 'react';
import { motion } from 'framer-motion';
import { textContainer } from './utils/motion'; // Assurez-vous de spécifier le bon chemin d'accès à votre fichier motion.
import { textVariant2 } from '../src/utils/motion'; // Assurez-vous de spécifier le bon chemin d'accès à votre fichier motion.

export const TypingText = ({ title, textStyles }) => (
    <motion.p
        variants={textContainer}
        className={`font-normal text-[14px] text-white ${textStyles}`}
    >
        {Array.from(title).map((letter, index) => (
            <motion.span variants={textVariant2} key={index}>
                {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
        ))}
    </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
    <motion.h2
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className={`mt-[8px] font-bold md:text-[64px] text-[40px]
        text-white ${textStyles}`}
    >
        {title}
    </motion.h2>

 );

export default TypingText; // Exporter TypingText comme export par défaut
