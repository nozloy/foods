import React from 'react'
import { GiSalmon } from 'react-icons/gi'
import { BiSolidBowlRice } from 'react-icons/bi'
import { PiShrimpFill } from 'react-icons/pi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { motion } from 'framer-motion'

const Card = () => {
	return (
		<div className='flex flex-col'>
			<div className='pt-10 pb-1 text-4xl font-sans font-bold text-slate-100 align-middle relative'>
				<div className=''>Филадельфия</div>
			</div>
			<div className='text-xl font-sans align-middle text-orange-400'>
				классические роллы
			</div>
			<img
				className='min-h-96 max-h-96 scale-y-100'
				src={require('../assets/filadelfia.png')}
				alt='image_alt'
			></img>
			{/* <img
				className='absolute mt-10 top-96 h-96 -scale-y-75 blur-xl opacity-20'
				src={require('../assets/fila.png')}
				alt='image_alt'
			></img> */}
			<div className='flex flex-row justify-center items-center mx-auto rounded-2xl backdrop-brightness-75 backdrop-blur-xl text-xl text-gray-400 font-sans py-4'>
				<div className='px-5 flex flex-col justify-center items-center'>
					<GiSalmon className=' text-2xl' />
					<div className='mt-2'>Лосось</div>
				</div>
				<BsThreeDotsVertical className='my-auto text-2xl' />
				<div className='px-5 flex flex-col justify-center items-center'>
					<BiSolidBowlRice className='text-2xl' />
					<div className='mt-2'>Рис</div>
				</div>
				<BsThreeDotsVertical className='my-auto text-2xl' />
				<div className='px-5 flex flex-col justify-center items-center'>
					<PiShrimpFill className='text-2xl' />
					<div className='mt-2'>Креветка</div>
				</div>
			</div>
			<div className='flex flex-row justify-center items-center mx-auto'>
				<div className='select-none text-4xl text-gray-300 font-sans p-5 mx-5'>
					600₽
				</div>
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					className='select-none rounded-xl backdrop-brightness-75 md:hover:backdrop-brightness-200 backdrop-blur-xl text-3xl text-gray-300 font-semibold font-sans pt-1 pb-2 px-3 mx-5'
				>
					Добавить
				</motion.button>
			</div>
		</div>
	)
}

export default Card
