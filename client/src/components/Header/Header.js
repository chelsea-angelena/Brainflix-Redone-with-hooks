import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/logo/logo-bf.svg';
import searchIcon from '../../assets/icons/SVG/Icon-upload.svg';
import './header.scss';

export default function Header() {
	return (
		<div className='header'>
			<div className='header__logo-div'>
				<NavLink to='/videos/1ainjruutd1j'>
					<img src={logo} alt='' width='200px' className='header__logo-img' />
				</NavLink>
			</div>
			<div className='header__search'>
				<i placeholder={searchIcon} className='fa fa-search icon'></i>
				<input
					type='textarea'
					className='header__search--input'
					placeholder='  Search'
				></input>
			</div>
			<div className='header__row'>
				<div className='header__button-div'>
					<Link to='/uploads'>
						<button className='header__button'>+ UPLOAD </button>
					</Link>
				</div>
				<div className='header__icon-div'></div>
			</div>
		</div>
	);
}
