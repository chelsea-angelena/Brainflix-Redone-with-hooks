import React from 'react';
import './video.scss';
import { Link, useRouteMatch } from 'react-router-dom';

export default function VideoList({ videos }, props) {
	console.log({ videos });
	let match = useRouteMatch();

	console.log(match);
	return (
		<>
			<div className='sidevideo'>
				<ul>
					{videos &&
						videos.map((videos) => (
							<li key={videos.id}>
								<div className='sidevideo__row'>
									<div className='sidevideo__img--div'>
										<Link to={`/videos/${videos.id}`}>
											<img
												width='300px'
												src={videos.image}
												alt=''
												className='sidevideo__img'
												id='videoImage'
											/>
										</Link>
									</div>
									<div className='column'>
										<div className='sidevideo__title'>{videos.title}</div>
										<div className='sidevideo__channel'>{videos.channel}</div>
									</div>
									<div>{videos.description}</div>
								</div>
							</li>
						))}
				</ul>
			</div>
		</>
	);
}
const styles = {};
