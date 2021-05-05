import React from 'react'
import { useTheme } from '../hooks/useTheme'
import Toggle from './Toggle'

export default function Header() {
	const [theme, setTheme] = useTheme(localStorage.getItem('theme'))

	const toggleTheme = () => {
		if (localStorage.getItem('theme') === 'dark') {
			setTheme('light')
		} else if (localStorage.getItem('theme') === 'light') {
			setTheme('dark')
		}
	}
	return (
		<header>
			<h1 className="logo">Richmond Garage</h1>
			<Toggle
				id="toggle"
				value={theme}
				aria="Toggle Theme"
				onClick={toggleTheme}
				checked={theme === 'dark' ? 'checked' : ''}
			/>
		</header>
	)
}
