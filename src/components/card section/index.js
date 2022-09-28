import { cardData } from './data';

import { ProjectCards } from '../cards';

export const ProjectSection = () => {
	return (
		<div className='all-projects'>
			<h1 className='section-title'>ALL PROJECTS</h1>

			<div className='h-100 d-flex flex-row flex-wrap justify-content-center align-items-center'>
				{cardData.map((item) => {
					return (
						<ProjectCards item={item} key={item.id}>
							{' '}
						</ProjectCards>
					);
				})}
			</div>
		</div>
	);
};
