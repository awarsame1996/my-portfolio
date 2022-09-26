import React from 'react';
import './index.css';

export const AboutMe = () => {
	return (
		<div className='container mt-5'>
			<h3 className='text'> About Me</h3>
			<div className='row gx-1 justify-content-around'>
				<div className='col-md-6'></div>

				<div className='col-md-6 about-info'>
					<h3 className='text'>who am I?</h3>
					<p className='text'>
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
