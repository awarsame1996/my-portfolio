import './index.css';
import { Navbar } from '../../components/navbar';

export const Resume = () => {
	return (
		<div className='resumePage'>
			<Navbar />
			<div className='resumeContainer'>
				<iframe
					className='resume'
					src='https://drive.google.com/file/d/1Y-ORhZAGxTgPT0Qt1Smm6G1jJE_dA2Cx/preview'
					allow='autoplay'
				></iframe>
			</div>
		</div>
	);
};
