import React from 'react';
import './index.css';
import { motion } from 'framer-motion';

export const Resume = () => {
	return (
		<motion.div
			initial={{
				width: 0,

				clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0 100%)',
			}}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
		>
			resume
		</motion.div>
	);
};
