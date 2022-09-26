import React from 'react';
import './index.css';
import { motion } from 'framer-motion';

export const Resume = () => {
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
		>
			resume
		</motion.div>
	);
};
