import { useEffect, useState } from 'react';
import videoApi from '../../api/videoApi';

export default function useVideos(props) {
	const [videos, setVideos] = useState([]);
	const [error, setError] = useState('');
	const getVideos = async () => {
		await videoApi
			.get('/videos')
			.then((res) => {
				setVideos(res.data);
			})
			.catch((e) => {
				setError(e, 'error');
			});
	};

	useEffect(() => {
		getVideos();
	}, []);

	return [videos, error, getVideos];
}
