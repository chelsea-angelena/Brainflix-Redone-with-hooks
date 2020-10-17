import React from 'react';
import {Route} from 'react-router-dom';
import HooksHome from './components/Pages/HooksHome';
import UploadPage from './components/Pages/UploadPage';

export default function App() {


	return (
		<>
			<Route path='/' render={() => <HooksHome/>} />
			<Route path='/uploads'>
				<UploadPage />
			</Route>
		</>
	);
}
