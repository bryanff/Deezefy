import React from 'react';
import { useEffect } from 'react';
import PauseRounded from '@mui/icons-material/PauseRounded';
import IconButton from '@mui/material/IconButton';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import Slider from '@mui/material/Slider';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useAudio } from '@/Hooks/useAudio';
import './MusicPlayer.styles.scss';
import {useSelector} from "react-redux";

const primaryTextColor = '#f8f8f8';

const MusicPlayer = () => {
	const { player } = useSelector(
		(state) => state.tracks
	);
	const [isPlaying, toggle, next, prev ] = useAudio();

	useEffect(() => {

	}, []);

	const handlePrevious = () =>{
		prev();
	}
	const handleNext = () =>{
		next();
	}


	return (
		<section className='player'>
			<div className='player__control-panel'>
				<div className='player__play-control'>
					<IconButton onClick={handlePrevious}  aria-label='previous song'>
						<SkipPreviousIcon fontSize='large' htmlColor={primaryTextColor} />
					</IconButton>
					<IconButton
						aria-label={isPlaying ? 'play' : 'pause'}
						onClick={toggle}
					>
						{!isPlaying ? (
							<PlayArrowRounded
								sx={{ fontSize: '3rem' }}
								htmlColor={primaryTextColor}
							/>
						) : (
							<PauseRounded
								sx={{ fontSize: '3rem' }}
								htmlColor={primaryTextColor}
							/>
						)}
					</IconButton>
					<IconButton onClick={handleNext} aria-label='next song'>
						<SkipNextIcon   fontSize='large' htmlColor={primaryTextColor} />
					</IconButton>
				</div>
				<div className='player__volume-control'>
					<VolumeDownRounded htmlColor={primaryTextColor} sx={{ mr: 1 }} />
					<Slider
						aria-label='Volume'
						defaultValue={30}
						value={50}
						sx={{
							color: 'red',
							'& .MuiSlider-track': {
								border: 'none',
							},
							'& .MuiSlider-thumb': {
								width: 14,
								height: 14,
								backgroundColor: primaryTextColor,
								'&:before': {
									boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
								},
								'&:hover, &.Mui-focusVisible, &.Mui-active': {
									boxShadow: 'none',
								},
							},
						}}
					/>
					<VolumeUpRounded htmlColor={'#52525d'} sx={{ ml: 1 }} />
				</div>
			</div>

			<div className='track-panel'>
				<img
					className='track-panel__cover'
					src='https://m.media-amazon.com/images/I/71oLN0onIOL._SY550_.jpg'
					alt=''
				/>
				<div className='track-panel__info'>
					<h4 className='track-panel__title'>November Rain - Guns 'N Roses</h4>
					<div className='track-panel__seekbar'>
						<AutorenewIcon htmlColor={primaryTextColor} sx={{ mr: 1 }} />
						<Slider
							defaultValue={30}
							value={50}
							aria-label='time-indicator'
							size='small'
							min={0}
							step={1}
							sx={{
								color: 'red',
								height: 4,
								'& .MuiSlider-thumb': {
									width: 8,
									height: 8,
									transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
									'&:before': {
										boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
									},
									'&:hover, &.Mui-focusVisible': {
										boxShadow: `0px 0px 0px 8px rgb(255 255 255 / 16%)`,
									},
									'&.Mui-active': {
										width: 20,
										height: 20,
									},
								},
								'& .MuiSlider-rail': {
									opacity: 0.28,
								},
							}}
						/>
						<ShuffleIcon htmlColor={primaryTextColor} sx={{ ml: 1 }} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default MusicPlayer;
