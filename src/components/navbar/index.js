import React from 'react';

export const Navbar = () => {
	return (
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
				<div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
					<div className='navbar-nav container-fluid justify-content-end'>
						<a
							className='nav-link active ms-5'
							aria-current='page'
							href='/'
						>
							Home
						</a>

						<a className='nav-link ms-5' download='' href='/resume'>
							resume
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};
