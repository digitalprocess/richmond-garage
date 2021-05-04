import React from 'react'
import PropTypes from 'prop-types'

export default function Toggle({id, value, onClick }) {

	return (
		<div className="toggle">
			<input
				id={id}
				type="checkbox"
				defaultValue={value}
				onClick={onClick}
			/>
			<label htmlFor={id} aria-label="Toggle" />
		</div>
	)
}

Toggle.propTypes = {
	id: PropTypes.string.isRequired,
	value: PropTypes.string,
	onClick: PropTypes.func,
}
