import React from 'react'
import { useTheme } from './hooks/useTheme'

export default function Theme() {
	const [theme, setTheme] = useTheme(localStorage.getItem('theme'))
	
	const toggleTheme = () => {
		if (localStorage.getItem('theme') === 'dark') {
			setTheme('light')
		} else if (localStorage.getItem('theme') === 'light') {
			setTheme('dark')
		}
	}

	return (
		<div className="toggle">
			<input
				id="toggle"
				type="checkbox"
				defaultValue={theme}
				onClick={toggleTheme}
			/>
			<label htmlFor="toggle" aria-label="Toggle for Dark Mode" />
		</div>
	)
}
