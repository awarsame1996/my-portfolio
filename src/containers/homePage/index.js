import React from 'react';
import './index.css';
import { motion } from 'framer-motion';
import { Hero } from '../../components/hero';
import { AboutMe } from '../../components/about me section';

import { Featured } from '../../components/cards';
import { FeaturedProjects } from '../../components/featured test';
import { ContactSection } from '../../components/contactSection';

export const Home = () => {
	return (
		<motion.div
			initial={{
				opacity: 0,
				clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
			}}
			animate={{
				opacity: 1,
				clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0 100%)',
			}}
			exit={{
				opacity: 0,
				clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
				transition: { duration: 0.5 },
			}}
			id='homepage'
		>
			<Hero></Hero>
			<AboutMe></AboutMe>

			<hr></hr>
			<FeaturedProjects />
			<ContactSection />
		</motion.div>
	);
};
