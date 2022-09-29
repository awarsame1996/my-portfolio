import React from 'react';
import './index.css';

export const NeonButton = ({ live }) => {
	console.log(live);
	return (
		<a className='neon-button content m-3 mb-5  ' href={live}>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			Deployed Url
		</a>
	);
};
