import React, { useEffect } from 'react'

export default function Search({ arr }) {
	const [searchTerm, setSearchTerm] = React.useState('')
	const [searchResults, setSearchResults] = React.useState([])
	const handleChange = e => setSearchTerm(e.target.value)

	// const covers = document.getElementsByTagName('dd')
	// const found = []
	
	// for (let i = 0; i < covers.length; i++) {
	// 	const element = covers[i].innerHTML
	// 	console.log(element)
	// 	found.push(element)
	// }
	
	// console.log(typeof covers)
	// console.log(arr)

	useEffect(() => {
		const results = arr.filter(item =>
			item.toLowerCase().includes(searchTerm)
		)
		setSearchResults(results)
	}, [searchTerm, arr])

	return (
		<div>
			<input
				type="text"
				placeholder="Search"
				value={searchTerm}
				onChange={handleChange}
			/>
			<ul>
				{searchResults.map(item => <li key={item}>{item}</li> )}
			</ul>
		</div>
	)
}
