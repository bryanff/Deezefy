import React from 'react';
import MusicPlayer from '@/Components/MusicPlayer/MusicPlayer';
import SearchBar from '@/Components/Search/Bar/SearchBar';

import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import './Header.styles.scss';

const drawerWidth = 240;

function Header() {
	return (
		<AppBar
			position='fixed'
			sx={{
				width: `calc(100% - ${drawerWidth}px)`,
				ml: `${drawerWidth}px`,
				bgcolor: '#21252d',
				boxShadow: 0,
				borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
			}}
		>
			<Toolbar>
				<MusicPlayer />
				<Box sx={{ flexGrow: 1 }} />
				<Box sx={{ flexGrow: 2 }} />
				<Box>
					<SearchBar />
				</Box>
			</Toolbar>
		</AppBar>
		// <header className={'header'}>
		// 	<nav className={'navbar'}>
		// 		<a href='#' className='navbar__brand'>
		// 			<em>MjsUnplugged</em>
		// 		</a>
		// 		<MusicPlayer />
		// 		<div className={'navbar__search'}>
		// 			<SearchButton />
		// 		</div>
		// 	</nav>
		// </header>
	);
}

export default Header;
