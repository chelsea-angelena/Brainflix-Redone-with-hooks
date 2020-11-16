import React from 'react';
import { Link, Route } from 'react-router-dom';
import useVideos from './useVideos';
import MainVideo from './MainVideo';


export default function HooksHome() {
	const [videos] = useVideos();

	return (
		<>
			<Route path='/videos/:id' component={MainVideo} />
			<Route
				path='/videos'
				render={() => (
					<div id='body__div vid'>
						<ul>
							{videos &&
								videos.map((videos) => (
									<li key={videos.id}>
										<div className='sidevideo__row'>
											<div>
												<Link
													to={{
														pathname: `/videos/${videos.id}`,
														videoProps: {
															id: videos.id,
														},
													}}
												>
													<img
														src={videos.image}
														alt=''
														className='sidevideo__img'
														style={styles.image}
													/>
												</Link>
											</div>
											<div className='column'>
												<div className='sidevideo__title'>{videos.title}</div>
												<div className='sidevideo__channel'>
													{videos.channel}
												</div>
											</div>
											<div>{videos.description}</div>
										</div>
									</li>
								))}
						</ul>
					</div>
				)}
			/>
		</>
	);
}
const styles = {
	image: {
		width: 200,
		height: 150,
	},
};
