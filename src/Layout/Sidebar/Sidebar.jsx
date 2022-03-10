import React, {useEffect} from 'react';
import Divider from '@mui/material/Divider';
import { NavLink } from 'react-router-dom'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import QueueMusicSharpIcon from '@mui/icons-material/QueueMusicSharp';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Favorite from '@mui/icons-material/Favorite';
import LibraryMusicSharpIcon from '@mui/icons-material/LibraryMusicSharp';
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';
import Badge from '@mui/material/Badge';
import {useSelector} from 'react-redux'

const drawerWidth = 240;
const primaryTextColor = '#fff'; //'#52525d';

const Sidebar = () => {
	const { favorites } = useSelector(( state) => state.tracks );

	useEffect(() => {

	},[favorites]);

	return (
		<>
			<CssBaseline />
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						boxSizing: 'border-box',
						bgcolor: '#21252d',
						color: primaryTextColor,
					},
				}}
				variant='permanent'
				anchor='left'
			>
				<Toolbar>
					<Typography variant='h5' component='h2'>
						<strong>
							<em>
								<span style={{ color: 'red' }}>Mjs</span>Unplugged
							</em>
						</strong>
					</Typography>
				</Toolbar>
				<Divider />
				<List>
					<ListItem button>
						<ListItemIcon>
							<LibraryMusicSharpIcon sx={{ color: primaryTextColor }} />
						</ListItemIcon>
						<ListItemText primary={'Music'} />
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<Favorite sx={{ color: 'red' }} />
						</ListItemIcon>
						<ListItemText primary={'My Favorites'} />
					</ListItem>
					<ListItem button>
						<ListItemIcon>
								<QueueMusicSharpIcon sx={{ color: 'orange' }} />
							</ListItemIcon>
						<ListItemText primary={'Playlist'} />
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<InterpreterModeIcon sx={{ color: 'orange' }} />
						</ListItemIcon>
						<ListItemText primary={'Artist'} />
					</ListItem>
				</List>
				<Divider />
				<List
					sx={{
						width: '100%',
						maxWidth: 360,
						bgcolor: '#21252d',
						color: '#ff',
					}}
				>
					{favorites.map((track,index)=>{
						return <ListItem key={index}>
							<ListItemAvatar>
								<Avatar>
									<Avatar
										src={track.album.cover_small}
									/>
								</Avatar>
							</ListItemAvatar>
							<ListItemText
								primary={track.title}
								secondary={
									<React.Fragment>
										<Typography
											sx={{ color: 'orange' }}
											component='span'
											variant='body2'
										>
											{track.artist.name}
										</Typography>
									</React.Fragment>
								}
							/>
						</ListItem>
					})}

				</List>
			</Drawer>
		</>
	);
	// return(
	// 	<Paper sx={{ width: 250, maxWidth: '100%', height: '100%', borderRadius:0}}>
	// 		<MenuList>
	// 			<MenuItem>
	// 				<ListItemIcon >
	// 					<ContentCut fontSize="small" />
	// 				</ListItemIcon>
	// 				<ListItemText sx={{color:'#52525d'}}>Cut</ListItemText>
	// 			</MenuItem>
	// 			<MenuItem>
	// 				<ListItemIcon>
	// 					<ContentCopy fontSize="small" />
	// 				</ListItemIcon>
	// 				<ListItemText>Copy</ListItemText>
	// 			</MenuItem>
	// 			<MenuItem>
	// 				<ListItemIcon>
	// 					<ContentPaste fontSize="small" />
	// 				</ListItemIcon>
	// 				<ListItemText>Paste</ListItemText>
	// 			</MenuItem>
	// 			<Divider />
	// 			<MenuItem>
	// 				<ListItemIcon>
	// 					<Cloud fontSize="small" />
	// 				</ListItemIcon>
	// 				<ListItemText>Web Clipboard</ListItemText>
	// 			</MenuItem>
	// 		</MenuList>
	// 	</Paper>
	// );
}

export default Sidebar;
