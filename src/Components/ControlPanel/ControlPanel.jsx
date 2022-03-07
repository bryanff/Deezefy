import React from 'react'
import './ControlPanel.scss'

function ControlPanel({name, description, price, imageUrl}) {
	return (
		<section className="control-panel">
			<div className="control-panel__controls">
				<div className="control-panel__button"></div>
				<div className="control-panel__button" id="play"></div>
				<div className="control-panel__button"></div>
			</div>
		</section>
	)
}

export default ControlPanel;