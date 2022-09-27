import { Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './containers/homePage';
import { LoadingPage } from './containers/loading';
import { Resume } from './containers/resume';

import { AnimatePresence } from 'framer-motion';
export const AppRoutes = () => {
	const location = useLocation();

	return (
		<AnimatePresence exitBeforeEnter>
			<Routes location={location} key={location.pathname}>
				<Route path='/resume' element={<Resume />} />
				<Route path='/' element={<LoadingPage />} />
				<Route path='/home' element={<Home />} />
			</Routes>
		</AnimatePresence>
	);
};
