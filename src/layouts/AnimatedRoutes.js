import React from 'react'
import ItemsMenu from '../pages/ItemsMenu'
import DefaultLayout from './DefaultLayout'
import Card from './Card'
import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'

const AnimatedRoutes = () => {
	const location = useLocation()
	return (
		<AnimatePresence mode='wait'>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<DefaultLayout />}>
					<Route index element={<ItemsMenu />} />
					<Route path='card' element={<Card />} />
				</Route>
			</Routes>
		</AnimatePresence>
	)
}

export default AnimatedRoutes
