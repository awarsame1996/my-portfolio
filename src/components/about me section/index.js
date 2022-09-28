import React from 'react';
import './index.css';
import profileImage from '../../assets/images/profile.jpeg';

export const AboutMe = () => {
	return (
		<div className='about-container mt-5'>
			<h3 className='section-title'> About Me</h3>
			<div className='row gx-1 justify-content-around'>
				<div className='col-md-6'>
					<div className='profile-img'>
						<img
							className='img-thumbnail rounded-circle'
							src='https://d2g5r6q74hb2rv.cloudfront.net/eyJidWNrZXQiOiJmbG93Y3YtaW1hZ2VzLXByb2QiLCJrZXkiOiJhdmF0YXIvazVlU3BuVnlNS1d6RUtNMHNmTDk3LmpwZWciLCJlZGl0cyI6eyJncmF5c2NhbGUiOmZhbHNlLCJ3ZWJwIjp0cnVlLCJqcGVnIjp0cnVlLCJwbmciOmZhbHNlLCJleHRyYWN0Ijp7IndpZHRoIjo0OTcsImhlaWdodCI6NDk3LCJ0b3AiOjExNCwibGVmdCI6NH0sInJlc2l6ZSI6eyJ3aWR0aCI6NjAwfX19'
							alt=''
						/>
					</div>
				</div>

				<div className='col-md-6 about-info'>
					<h3 className='text '>who am I?</h3>
					<p className='text col-md-10'>
						Dynamic and versatile web-developer with rich experience in
						front-end and back-end development processes and technical
						proficiency in a wide-variety of tools. Analytical thinker who
						excels at evaluating issues and implementing effective
						technical solutions in line with client and business
						requirements. Practiced collaborator adept at working with
						internal and external stakeholders to achieve shared goals.
						Detail-oriented professional skilled at leveraging multiple
						programming languages and frameworks to build user-friendly and
						responsive web applications. Quick learner who easily adapts to
						changing circumstances and duties and thrives on readily
						grasping new information and technologies.
					</p>
				</div>
			</div>
		</div>
	);
};
