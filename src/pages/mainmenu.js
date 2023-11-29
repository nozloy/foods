import React from 'react'
import Sushi from '../data/Sushi.ts'
import { motion } from 'framer-motion'

const Mainmenu = () => {
	const items = Sushi.map((item) => (
		<motion.button
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			className='p-5 w-11/12 my-5 mx-auto backdrop-brightness-75 backdrop-blur-xl flex flex-row justify-start items-center shadow-lg rounded-xl'
			key={item.id}
		>
			<img
				className='h-20 pr-5'
				src={require(`../assets/${item.img}`)}
				alt={item.name}
			/>
			<div className='flex flex-col items-start'>
				<div className='select-none font-sans text-2xl text-slate-100'>
					{item.name}
				</div>
				<div className='select-none font-sans text-md text-slate-100'>
					Цена: {item.price}₽
				</div>
			</div>
		</motion.button>
	))
	return <div className='w-11/12'>{items}</div>
}

export default Mainmenu
