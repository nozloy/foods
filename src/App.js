import './App.css'
import React from 'react'
import Topbar from './layouts/topbar.js'
import Card from './layouts/card'

function App() {
	return (
		<div className='App bg-slate-800 h-screen min-h-screen'>
			<div className='max-w-4xl flex flex-col mx-auto rounded-2xl h-screen shadow-xl'>
				<Topbar />
				<div className='flex justify-center'>
					<Card />
				</div>
			</div>
		</div>
	)
}

export default App
