import { items } from '../data';
import React, { useState } from 'react';
import './index.css';

export const Featured = () => {
	const [index, setIndex] = useState(0);

	const mod = (n, m) => {
		let result = n % m;

		// Return a positive value
		return result >= 0 ? result : result + m;
	};

	let info = items[index];

	return (
		<div className=' featured-container '>
			<h2 className='featured-title'>Featured Projects</h2>

			<div className='row w-100'>
				<div className='col-md-6 project-info'>
					<h3 className='text-center text'>{info.title}</h3>

					<h4 className=' text'>{info.description}</h4>
					<div className='skill-container'>
						<h4> skills used:</h4>
						{info.tags.map((tag) => {
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
					<div className='d-flex flex-row justify-content-around '>
						<button
							type='button'
							className='btn btn-lg btn-light'
							data-mdb-ripple-color='dark'
							href={info.live}
						>
							Live
						</button>
						<button
							type='button'
							className='btn btn-lg btn-dark'
							href={info.github}
						>
							Github
						</button>
					</div>
					<div className='scroll-btn-container'>
						<button
							onClick={() => setIndex((index + 1) % items.length)}
							className='scroll-btn'
						>
							<i className='fa fa-arrow-right' aria-hidden='true'></i>
						</button>
					</div>
				</div>

				<div className='col-md-6'>
					<div className='carousell'>
						{items.map((item, i) => {
							const indexLeft = mod(index - 1, items.length);
							const indexRight = mod(index + 1, items.length);

							let className = 'img-card';

							if (i === index) {
								className = 'img-card card--active';
							} else if (i === indexRight) {
								className = 'img-card card--right';
							} else if (i === indexLeft) {
								className = 'img-card card--left';
							} else className = 'img-card';
							return (
								<div className={className}>
									<img
										src={item.url}
										className='img-fluid rounded'
										alt='card-img'
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
