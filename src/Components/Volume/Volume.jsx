import React from 'react'
import VolumeDown from '@mui/icons-material/VolumeDown';
import Slider from '@mui/material/Slider';
import VolumeUp from '@mui/icons-material/VolumeUp';
import './Volume.styles.scss'

function VolumeControl() {
	return (
		<section className="volume-control">
				<VolumeDown className="volume-control__icon" />
					<Slider className="volume-control__slider" aria-label='Volume' value={50} />
				<VolumeUp className="volume-control__icon"/>
		</section>
	)
}

export default VolumeControl;