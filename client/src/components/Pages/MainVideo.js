import React, { useState, useEffect } from 'react';
import './video.scss';

import videoApi from '../../api/videoApi.js';

export default function MainVideo(props) {
	const [video, setVideo] = useState([]);
	const [error, setError] = useState('');
	let id = props.match.params.id;

	const getVideo = async (id) => {
		await videoApi
			.get(`/videos/${id}`)
			.then((res) => {
				setVideo(res.data[0]);
			})
			.catch((e) => {
				setError(e, 'error');
			});
	};

	useEffect(() => {
		getVideo(id);
	}, [id]);

	if (error) {
		return [error];
	} else {
		return (

				<div className='video'>
					<div className='video__ol'>
						<div className="video__divdiv">
							<div className='video__ol-div' key={video.id}>
								<video
									className='video__video'
									poster={video.image}
									id='player'
									playsInline
									controls
									width='100%'
								>
									<source src={video.video} type='MPEG-4 movie' width='100%' />
								</video>
							</div>
							<div id="body__div">
							<div className='video__div'>
								<div>
									<div className='video__title--main'>
										<p className='video__title--main'> {video.title}</p>
									</div>
									<div className="video__channel-row">
									<div>
										<p className='video__channel'>{video.channel}</p>
									</div>
									<div className='social__data'>
										<p className='social__data--views'>
											<span className='social__data--viewsData'>
												{video.views}
											</span>
										</p>
										<p className='social__data--likes'>
											<span className='social__data--likesData'>
												{video.likes}
											</span>
										</p>
										</div>
									</div>
									<div>
										<p className='video__description'>{video.description}</p>
									</div>
								</div>
							</div>
						</div>
						<div>
							<div className='makeComment'>
								<h3 className='makeComment__title'>3 Comments</h3>

								<div className='row'>
								{/* <div className="comment__row"></div> */}
									<div className='makeComment__icon'></div>
									<div>
										<label className='makeComment__input-label'>
											JOIN THE CONVERSATION
										</label>
										<input
											type='textarea'
											className='makeComment__input-box'
											name='makeComment__input'
											placeholder='comment....'
											width='100px'
											height='400px'
										></input>
									</div>
								</div>
								<p>
									<button className='makeComment__button--button'>
										COMMENT
									</button>
								</p>
							</div>
						</div>
						<div className='comment'>
							<ul className="comments__list">
								{video.comments &&
									video.comments.map((comment) => (
										<li className='comment__sng' key={comment.id} align='start'>
											<div className='comment__row'>
												<p className='comment__image'></p>
												<div className='comment__name'>
													<p>
														{comment.name}
														<span className='comment__date'>
															{comment.date}11/15/2018
														</span>
													</p>
												</div>
											</div>
											<p className='comment__comment'>{comment.comment}</p>
										</li>
									))}
							</ul>
						</div>
					</div>
				</div>
				<div className='video__next'>NEXT VIDEO</div>
			</div>
		);
	}
}
