import React from 'react';

export const Footer = () => {
	return (
		<footer className=' text-center text-lg-start bg-white text-muted'>
			<div
				style={{
					backgroundColor: 'black',
				}}
				className='text-center p-2'
			>
				<div className='mt-3 mb-3'>
					<a className='me-4 link-secondary '>
						<i className='fab fa-facebook-f fa-lg'></i>
					</a>
					<a className='me-4 link-secondary'>
						<i className='fab fa-twitter fa-lg'></i>
					</a>
					<a className='me-4 link-secondary'>
						<i className='fab fa-google fa-lg'></i>
					</a>
					<a className='me-4 link-secondary'>
						<i className='fab fa-instagram fa-lg'></i>
					</a>
					<a className='me-4 link-secondary '>
						<i className='fab fa-linkedin fa-lg'></i>
					</a>
					<a className='me-4 link-secondary'>
						<i className='fab fa-github fa-lg'></i>
					</a>
				</div>
			</div>
		</footer>
	);
};
