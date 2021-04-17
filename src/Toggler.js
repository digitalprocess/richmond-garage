import React, { useRef, useState } from 'react'
import { useTheme } from './hooks/useTheme'

export default function Toggler() {
	const [checked, setChecked] = useState()
	const [theme, setTheme] = useTheme('')
	const ref = useRef()

	console.log(checked)
	console.log(theme)
	
	const handleClick = () => {
		if (localStorage.getItem('theme') === 'dark') {
			setTheme('light')
			setChecked(false)
			ref.current.removeAttribute('checked')
		} else if (localStorage.getItem('theme') === 'light') {
			setTheme('dark')
			setChecked(true)
			ref.current.setAttribute('checked', '')
		}
	}

	return (
	<div className="dark-mode-toggler">
		<input onClick={handleClick} type="checkbox" id="toggler" ref={ref} />
		<label htmlFor="toggler" aria-label="Toggler for Dark Mode" />
	</div>
	)
}
