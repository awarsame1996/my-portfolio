import React from 'react';

import { TypeAnimation } from 'react-type-animation';

export const Hero = () => {
	return (
		<div
			class='p-5 text-center bg-image'
			style={{
				backgroundImage:
					"url('https://images.unsplash.com/photo-1663970206579-c157cba7edda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80')",
				height: '60vh',
			}}
		>
			<div class='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
				<nav className=' navbar navbar-expand-lg navbar-dark '>
					<div className='container-fluid'>
						<a className='navbar-brand' href='/'>
							<i className='fa fa-user-circle' aria-hidden='true'></i>|
							Abdilatif Warsame
						</a>
						<button
							className='navbar-toggler'
							type='button'
							data-mdb-toggle='collapse'
							data-mdb-target='#navbarNavAltMarkup'
							aria-controls='navbarNavAltMarkup'
							aria-expanded='false'
							aria-label='Toggle navigation'
						>
							<i className='fas fa-bars'></i>
						</button>
						<div
							className='collapse navbar-collapse'
							id='navbarNavAltMarkup'
						>
							<div className='navbar-nav container-fluid justify-content-end'>
								<a
									className='nav-link active ms-5'
									aria-current='page'
									href='/'
								>
									Home
								</a>
								<a className='nav-link ms-5' href='/vehicles'>
									portfolio
								</a>
								<a className='nav-link ms-5' href='/'>
									resume
								</a>
							</div>
						</div>
					</div>
				</nav>
				<div class='d-flex justify-content-center align-items-center h-100'>
					<div class='text-white'>
						<TypeAnimation
							sequence={[
								'Hi 👋! ', // Types 'One'
								3000, // Waits 1s
								'I am Abdilatif Warsame', // Deletes 'One' and types 'Two'
								4000, // Waits 2s
								'I am Abdilatif Warsame, a full stack web developer', // Types 'Three' without deleting 'Two'
								() => {
									return (
										<a
											class='btn btn-outline-light btn-lg'
											href='#!'
											role='button'
										>
											Call to action
										</a>
									);
								},
							]}
							wrapper='div'
							cursor={true}
							style={{ fontSize: '4em' }}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
