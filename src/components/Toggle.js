import React from 'react'
import PropTypes from 'prop-types'

export default function Toggle({id, value, onClick, isChecked, title }) {
	return (
		<div className="toggle" title={title}>
			<input
				id={id}
				type="checkbox"
				onClick={onClick}
				checked={isChecked}
				defaultValue={value}
				onChange={e => e.target.value}
			/>
			<label htmlFor={id} aria-label={title} />
		</div>
	)
}

Toggle.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	isChecked: PropTypes.bool.isRequired,
	value: PropTypes.string,
	onClick: PropTypes.func,
}
