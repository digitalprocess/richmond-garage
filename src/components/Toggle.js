import React from 'react'
import PropTypes from 'prop-types'
export default function Toggle({id, value, onClick, title }) {
	return (
		<div className="toggle" title={title}>
			<input
				id={id}
				type="checkbox"
				checked={value}
				onClick={onClick}
				defaultValue={value}
				onChange={e => e.target.checked}
			/>
			<label htmlFor={id} aria-label={title} />
		</div>
	)
}

Toggle.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	value: PropTypes.bool,
	onClick: PropTypes.func,
}
