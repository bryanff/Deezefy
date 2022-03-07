import React from 'react'
import './../Assets/sass/components/_card.scss'

function Card({name, description, price, imageUrl}) {
	return (
		<section className="card">
			<div className="card__image">
				<img  src={imageUrl} alt="product image" />
			</div>
			<div className="card__content">
				<h1 className="card__title">{name}</h1>
				<p className="card__description">
					<strong>Description:</strong>
					{description}
				</p>
				<h2 className="card__price">{price}</h2>
			</div>
		</section>
	)
}

export default Card;