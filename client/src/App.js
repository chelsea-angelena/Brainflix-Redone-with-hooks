import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import HooksHome from './components/Pages/HooksHome';
import Header from './components/Header/Header';
import UploadPage from './components/Pages/UploadPage';

export default function App() {
	return (
		<>
			<Header />
			<Route path='/uploads' component={UploadPage} />
			<Route path='/' component={HooksHome} />
			<Redirect from='/' to='/videos/1ainjruutd1j' />
		</>
	);
}
