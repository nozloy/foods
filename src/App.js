import './App.css'
import React from 'react'
import Topbar from './layouts/topbar.js'
import Card from './layouts/card'
import Mainmenu from './pages/mainmenu.js'

function App() {
	return (
		<div className='App bg-slate-800 min-h-screen'>
			<div className='max-w-4xl flex flex-col mx-auto rounded-2xl shadow-xl shadow-slate-50'>
				<Topbar />
				<div className='flex justify-center'>
					<Mainmenu />
					{/* <Card /> */}
				</div>
			</div>
		</div>
	)
}

export default App
