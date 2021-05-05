import React from 'react'
import PropTypes from 'prop-types'
export default function Toggle({id, value, onClick, checked, aria }) {
	return (
		<div className="toggle">
			<input
				id={id}
				type="checkbox"
				checked={checked}
				onClick={onClick}
				defaultValue={value}
				onChange={e => e.target}
			/>
			<label htmlFor={id} aria-label={aria} />
		</div>
	)
}

Toggle.propTypes = {
	id: PropTypes.string.isRequired,
	value: PropTypes.string,
	onClick: PropTypes.func,
	aria: PropTypes.string.isRequired,
}
