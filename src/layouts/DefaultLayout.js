import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from './Topbar'

const DefaultLayout = () => {
	return (
		<div className='App bg-slate-800 min-h-screen max-w-md mx-auto'>
			<div className='max-w-4xl flex flex-col mx-auto rounded-2xl shadow-xl shadow-slate-50'>
				<Topbar />
				<div className='flex justify-center'>
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default DefaultLayout
