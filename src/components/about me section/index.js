import React from 'react';
import './index.css';

export const AboutMe = () => {
	return (
		<div class='container mt-5'>
			<h3 className='text-white'> About Me</h3>
			<div class='row gx-1 justify-content-around'>
				<div class='col-md-6'></div>

				<div class='col-md-6 about-info'>
					<h3 class='text-white'>who am I?</h3>
					<p className='text-white'>
						I'm and aspiring web developer currently training away at the
						University of Birmingham Coding Boot Camp. Just taking on the
						new venture in life to add my skills under my belt and to
						ultimately challenge myself into doing something I've never
						done{' '}
					</p>
				</div>
			</div>
		</div>
	);
};
