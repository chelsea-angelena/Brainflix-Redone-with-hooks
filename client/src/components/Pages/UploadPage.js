import React from 'react';
import { useForm } from 'react-hook-form';
import uploadImg from '../../assets/images/Upload-video-preview.jpg';
import videoApi from '../../api/videoApi';
import './upload.scss';

export default function UploadPage() {
	const { register, handleSubmit, watch, errors } = useForm();

	const onSubmit = async (data) => {
    await videoApi.post('/uploads', { data })
    .then(res => {
			console.log(res);
      console.log(res.data);
    }).catch(error => {
      console.error(error, "error")})
  }
	const onClearForm = () => {
		alert('wire up on clear form');
	};
	// action ="/uploads" method = "post"
	console.log(watch('example'));
	return (
		<div className='upload__div'>
			<h2>Upload Video</h2>
			<h4> VIDEO THUMBNAIL</h4>
			<div>
				<img className='upload__image' src={uploadImg} alt='' />
			</div>
			<h4>TITLE YOUR VIDEO</h4>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					className='input__text'
					ref={register({ required: true })}
					name='title'
					placeholder='   ...title'
				/>
				{errors.title && 'Please include a title'}
				<h4>INLUDE YOUR NAME</h4>
				<input
					className='input__text'
					ref={register({ required: true })}
					name='name'
					placeholder='    ...name'
				/>{' '}
				{errors.name && 'Please include your name'}
				<h4>ADD A VIDEO DESCRIPTION</h4>
				<input
					className='input__textarea'
					type='textarea'
					placeholder='    Add a description...'
					name='description'
					ref={register({ required: true })}
				/>
				{errors.description && <span>Please include a description</span>}
				<div className='button__div'>
					<input className='button__blue' type='submit' />
				</div>
				<div className='button__div--white'>
					<button className='button__white' onClick={onClearForm}>
						CANCEL
					</button>
				</div>
			</form>
		</div>
	);
}

// <form action = "/" method = "POST">
// <input type="text" name="name" placeholder="first name">
// <input type="text" name ="email" placeholder="email">
// <button type = "submit" name= "submitButton">Sign up here!</button>
// </form>
