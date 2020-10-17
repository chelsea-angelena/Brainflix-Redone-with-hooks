const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const data = require('./data.json');
const cors = require('cors');
console.log(data);
const videos = data.videos;
const video = data.video;

console.log(videos, 'VIDEO');
const morgan = require('morgan');
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || process.argv[2] || 8083;

app.get('/', (req, res) => {
	let defaultId = '1akljruuvhzt';
	let video = data.video;
	const result = video.filter((video) => video.id === defaultId);

	res.json({ videos, result });
});

app.get('/videos', (req, res) => {
	let videos = data.videos;
	res.json(videos);
});

app.get('/videos/:id', (req, res) => {
	let result = video.filter((video) => video.id === req.params.id);
	console.log(req.params, 'reqparams');
	res.json(result);
});

console.log(video, 'video');

app.post('/uploads', (req, res) => {
	const { data } = req.body;
	res.json([
		...videos,
		{
			data,
		},
	]);
	videos.push(data.videos);
	return res.status(201).send(data);
});

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});

// module.exports = app;
