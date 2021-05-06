import React from 'react'
import { useTheme } from '../hooks'
import Toggle from './Toggle'

export function Theme () {
	const [theme, setTheme] = useTheme()
	const toggleTheme = () => {
		(localStorage.getItem('theme') === 'dark') ? setTheme('light') : setTheme('dark')
	}
	const isDarkTheme = theme === 'dark'

	return (
		<div className="theme-toggle">
			<Toggle
				id="theme-checkbox"
				value={theme}
				title="Toggle Theme"
				onClick={toggleTheme}
				isChecked={isDarkTheme}
			/>
		</div>
	)
}
