import React from 'react'
import { motion } from 'framer-motion'
import { FaPlusCircle } from 'react-icons/fa'
import { FaMinusCircle } from 'react-icons/fa'
import useShopStore from '../data/stores/useShopStore.ts'

const ItemsMenu = () => {
	const { items, incValue, decValue } = useShopStore()
	const increase = (Id) => {
		incValue(Id)
		console.log('itemId', Id)
	}
	const decrease = (Id) => {
		decValue(Id)
		console.log('itemId', Id)
	}
	const itemsFood = items.map((item) => (
		<motion.div
			className='relative select-none p-5 w-11/12 my-5 mx-auto backdrop-brightness-75 backdrop-blur-xl flex flex-row justify-between items-center shadow-lg rounded-xl'
			key={item.id}
		>
			<div className='flex flex-row justify-start items-center'>
				<img
					className='h-20 pr-5'
					src={require(`../assets/${item.img}`)}
					alt={item.name}
				/>
				<div className='flex flex-col items-start'>
					<div className='select-none font-sans text-xl font-seminbold text-slate-100 text-left leading-5 pb-1'>
						{item.name}
					</div>
					<div className='select-none font-sans text-sm text-slate-400'>
						{item.price}₽
					</div>
				</div>
			</div>
			<motion.button
				onClick={() => increase(item.id)}
				whileHover={{ scale: 1.2 }}
				whileTap={{ scale: 0.9 }}
				className='select-none'
			>
				<FaPlusCircle className='select-none m-4 text-5xl text-slate-400 hover:text-slate-100' />
			</motion.button>
			{item.count ? (
				<motion.div
					key={item.count}
					animate={{ scale: 1 }}
					initial={{ scale: 1.3 }}
					className='w-10 h-6 absolute -top-1 -right-1 text-gray-400 hover:text-gray-600 bg-white rounded-full'
				>
					<div className='text-slate-700 text-md font-bold align-middle text-center'>
						{item.count}
					</div>
				</motion.div>
			) : (
				<></>
			)}
			{item.count ? (
				<motion.button
					onClick={() => decrease(item.id)}
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.9 }}
					className='absolute -bottom-1 -right-2 text-3xl text-red-400 hover:text-red-600'
				>
					<FaMinusCircle />
				</motion.button>
			) : (
				<></>
			)}
		</motion.div>
	))
	return <div className='w-11/12'>{itemsFood}</div>
}

export default ItemsMenu
