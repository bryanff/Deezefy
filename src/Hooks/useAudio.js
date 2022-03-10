import React, { useState, useEffect } from "react";
import {useSelector} from 'react-redux';
export const useAudio = () => {
	const { playlist } = useSelector((state) => state.tracks);
	const [counter, setCounter] = useState(0);
	const startAudio = playlist.length !== 0  ? playlist[0].preview : null;
	const [audio, setAudio] = useState(new Audio(startAudio));
	const [playing, setPlaying] = useState(false);

	const toggle = () => setPlaying(!playing);
	const next = () =>  {
		console.log('next',playlist[counter+1]);
		setAudio(new Audio(playlist[counter+1].preview))
	}
	const prev = () =>  {
		console.log('next',playlist[counter-1]);
		setAudio(new Audio(playlist[counter-1].preview))
	}

	useEffect(() => {
			playing ? audio.play() : audio.pause();
		},
		[playing]
	);

	useEffect(()=>{

	},[audio])

	useEffect(() => {
		audio.addEventListener('ended', () => setPlaying(false));
		return () => {
			audio.removeEventListener('ended', () => setPlaying(false));
		};
	}, []);

	return [playing, toggle,next,prev,playlist[0]];
};

