import { items } from './data';
import React, { useState } from 'react';

import { TypeAnimation } from 'react-type-animation';
import './index.css';

export const FeaturedProjects = () => {
	const [index, setIndex] = useState(0);

	const mod = (n, m) => {
		let result = n % m;

		// Return a positive value

		return result >= 0 ? result : result + m;
	};

	return (
		<div id='projectss' className='section-container'>
			<div className='featured-section'>
				{items.map((item, i) => {
					const indexLeft = mod(index - 1, items.length);
					const indexRight = mod(index + 1, items.length);

					let className = 'card';

					if (i === index) {
						className = 'card card--active';
					} else if (i === indexRight) {
						className = 'card card--right';
					} else if (i === indexLeft) {
						className = 'card card--left';
					} else className = 'card';
					return (
						<div className={className}>
							<div className='thumbnail'>
								<img className='left' src={item.url} alt='project-img' />
							</div>
							<div className='right'>
								<h1>{item.title}</h1>
								<div className='d-flex flex-row justify-content-between '>
									<a
										className='btn btn btn-light'
										data-mdb-ripple-color='dark'
										href={item.live}
										target='_blank'
									>
										Live
									</a>
									<a
										className='btn btn btn-dark'
										href={item.github}
										target='_blank'
									>
										Github
									</a>
								</div>

								<div className='separator'></div>
								<p>{item.description} ...</p>
							</div>
							<div className=' skill-container'>
								{item.tags.map((tag) => {
									return (
										<div className='skill-card'>
											<img
												src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tag}/${tag}-original.svg`}
												alt='react-logo'
											/>

											<h6 className='skills-card-info'>{tag}</h6>
										</div>
									);
								})}
							</div>
							<div className='fab'>
								<i
									onClick={() => setIndex((index + 1) % items.length)}
									className='fa fa-arrow-up fa-3x'
								>
									{' '}
								</i>
							</div>
						</div>
					);
				})}
			</div>
			<div className='Featured-description'>
				<h2 className='section-title'>featured Projects</h2>
				<div>
					<TypeAnimation
						sequence={[
							'Here are some of my main Projects! ', // Types 'One'
							5000, // Waits 1s
							'Or scroll down to see more',
							5000,
						]}
						wrapper='div'
						cursor={true}
						repeat={Infinity}
						style={{ fontSize: '3rem' }}
					/>
				</div>
			</div>
		</div>
	);
};
