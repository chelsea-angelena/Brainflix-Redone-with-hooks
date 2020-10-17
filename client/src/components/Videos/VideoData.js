// import React from 'react';
// import { Route, Switch, Link, matchPath } from 'react-router-dom';
// import MainVideo from './MainVideo';
// import './video.scss';
// import videoApi from '../../api/videoApi';
// import VideoList from './VideoList';
// import Header from '../Header/Header';
// // baseUrl = 'http://localhost:8083'

// // console.log(videoApi, 'videoApi');
// const defaultId = '1akljruuvhzt';
// // videoApi.get('/videos/:id', {id: `${videolist.id}`})

// export default class VideoData extends React.Component {
// 	state = {
// 		videos: [],
// 		mainvideo: [],
// 	};

// 	componentDidMount() {
// 		videoApi
// 			.get('/')
// 			.then((res) => {
// 				console.log(res);
// 				let videos = res.data.videos;
// 				let mainvideo = res.data.defaultVid[0];

// 				this.setState({
// 					videos: videos,
// 					mainvideo: mainvideo,
// 				});
// 			})
// 			.catch((err) => {
// 				console.error(err);
// 			});
// 	}
// 	componentDidUpdate() {
// 		// const id = props.match.params.id
// 		// const id=this.props.match.params;
// 		const {
// 			match: { params },
// 		} = this.props;
// 		console.log(this.props, "porps.match");
// 		if (
// 			this.props.match &&
// 			this.props.match.params.id !== this.state.mainvideo.id
// 		) {

//    componentDidUpdate() {
//       const id = this.props.match.params.id
//       axios.get(`http://localhost:${port}/videos/${id}`)
//          .then(newData => {
//             this.setState({ currentVideo: newData.defaultVid })
//          })
//    }
// 			videoApi
// 				.get(`/videos/${params.id}`)
// 				.then((res) => {
// 					console.log(res);
// 					// this.setState({
// 					// 	mainvideo: mainvideo
// 				})
// 				.catch((err) => {
// 					console.error(err);
// 				});
// 		}
// 	}

// 	render() {
// 		return (
// 			<>
// 				<VideoList videolist={this.state.videos} />

// 				<MainVideo video={this.state.mainvideo} />
// 			</>
// 		);
// 	}
// }

// // function VideoList({ videolist }) {
// // 	console.log(videolist);
// // 	return (
// // 		<>
// // 			<div className='sidevideo'>
// // 				<p className='sidevideo__header'>NEXT</p>
// // 				<ul>
// // 					{VideoList && videolist.map((videolist) => (
// // 						<li key={videolist.id}>
// // 							<div className='sidevideo__row'>
// // 								<div>
// // 									<Link to={`/videos/:id`}>
// // 										<img
// // 											src={videolist.image}
// // 											alt=''
// // 											className='sidevideo__img'
// // 											style={styles.image}
// // 										/>
// // 									</Link>
// // 								</div>
// // 								<div className='column'>
// // 									<div className='sidevideo__title'>{videolist.title}</div>
// // 									<div className='sidevideo__channel'>{videolist.channel}</div>
// // 								</div>
// // 								<div>{videolist.description}</div>
// // 							</div>
// // 						</li>
// // 					))}
// // 				</ul>
// // 			</div>
// // 		</>
// // 	);
// // }
// const styles = {
// 	image: {
// 		width: 200,
// 		height: 150,
// 	},
// };
