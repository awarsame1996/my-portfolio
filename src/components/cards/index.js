import React from 'react';
import './index.css';
import { NeonButton } from '../neonButton';
import { motion } from 'framer-motion';

import { useState } from 'react';

export const ProjectCards = ({ item }) => {
	const { title, url, description, live } = item;
	const [isOpen, setisOpen] = useState(false);
	let className = 'card__inner';
	if (isOpen) {
		className = 'card__inner is-flipped';
	} else {
		className = 'card__inner';
	}

	return (
		<div id='1' onClick={() => setisOpen(!isOpen)} className='card__card'>
			<div className={className}>
				<div className='card__face card__face--front'>
					<h2>{title}</h2>

					<img
						src={url}
						className='img-fluid card_img'
						alt='Hollywood Sign on The Hill'
					/>
				</div>
				<div className='card__face card__face--back '>
					<div className='card__content'>
						<div className='card__header'>
							<h5 className='card-title content text-white'>{title}</h5>
						</div>
						<motion.div className='card-body '>
							<p className='card-text content'>{description}</p>

							<NeonButton live={live}></NeonButton>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
};
