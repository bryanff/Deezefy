import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import {useLocalStorage} from '@/Hooks/useLocalStorage';
import {useDispatch, useSelector} from 'react-redux';

import {addFavoritesTracks} from "@/redux/thunks/tracks";

const Img = styled('img')({
	margin: 'auto',
	display: 'block',
	maxWidth: '100%',
	maxHeight: '100%',
});

function fmtMSS(s) {
	return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s;
}

const ArtistCard = ({ id, title, duration, artist, album, preview }) => {
	const { favorites } = useSelector(
		(state) => state.tracks
	);
	const dispatch = useDispatch();
	const [playlist, setPlaylist] = useLocalStorage('playlist');
	const handleFavorite = () => {
		dispatch(addFavoritesTracks({
			title,
			duration,
			artist,
			album,
			preview,
		}))
	};
	const handlePlaylist = () => {
		setPlaylist({
			title,
			duration,
			artist,
			album,
			preview,
		});
	};
	const isAdded = (id) => {
		return favorites.filter(track => track.id === id).length > 0;
	}
	return (
		<Paper
			sx={{
				cursor: 'pointer',
				p: 2,
				marginBottom: '10px',
				maxWidth: '100%',
				flexGrow: 1,
				backgroundColor: '#0000001c',
			}}
		>
			<Grid container spacing={2}>
				<Grid item>
					<ButtonBase sx={{ width: 128, height: 128 }}>
						<Img alt='artist' src={album.cover_medium} />
					</ButtonBase>
				</Grid>
				<Grid item xs={12} sm container>
					<Grid item xs container direction='column' spacing={2}>
						<Grid item>
							<Typography gutterBottom variant='body2' sx={{ color: '#fffc' }}>
								Track : {title}
							</Typography>
							<Typography variant='body2' gutterBottom sx={{ color: '#fffc' }}>
								Artist : <Link href='#'>{artist.name}</Link>
							</Typography>
							<Typography variant='body2' sx={{ color: '#fffc' }}>
								Album : <Link href='#'>{album.title}</Link>
							</Typography>
						</Grid>
						<Grid item>

							<IconButton onClick={handleFavorite} sx={{ cursor: 'pointer', color: '#fffc' }}>
								{ isAdded(id) && <FavoriteIcon sx={{ color: 'red' }}/> }
								{ !isAdded(id) && <FavoriteBorderIcon />}

							</IconButton>
							<IconButton
								onClick={handlePlaylist}
								sx={{ cursor: 'pointer', color: '#fffc' }}
							>
								<PlaylistAddIcon />
							</IconButton>
						</Grid>
					</Grid>
					<Grid item sx={{ textAlign: 'right' }}>
						<Typography
							sx={{ color: '#fffc' }}
							variant='subtitle1'
							component='div'
						>
							25-01-1994
						</Typography>
						<Typography
							sx={{ color: '#fffc' }}
							variant='subtitle1'
							component='div'
						>
							{fmtMSS(duration)}
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Paper>
	);
};
export default ArtistCard;
