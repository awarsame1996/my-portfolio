import { items } from './data';
import React, { useState } from 'react';
import './index.css';

export const FeaturedProjects = () => {
	const [index, setIndex] = useState(0);

	const mod = (n, m) => {
		let result = n % m;

		// Return a positive value

		return result >= 0 ? result : result + m;
	};

	return (
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
					<div class={className}>
						<div class='thumbnail'>
							<img class='left' src={item.url} alt='project-img' />
						</div>
						<div class='right'>
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

							<div class='separator'></div>
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
						<div class='fab'>
							<i
								onClick={() => setIndex((index + 1) % items.length)}
								class='fa fa-arrow-down fa-3x'
							>
								{' '}
							</i>
						</div>
					</div>
				);
			})}
		</div>
	);
};