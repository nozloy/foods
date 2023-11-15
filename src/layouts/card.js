import React from 'react'
import { GiSalmon } from 'react-icons/gi'
import { BiSolidBowlRice } from 'react-icons/bi'
import { PiShrimpFill } from 'react-icons/pi'
import { BsThreeDotsVertical } from 'react-icons/bs'

const Card = () => {
	return (
		<div className='flex flex-col'>
			<div className='pt-10 pb-1 text-4xl font-sans font-bold text-white align-middle relative'>
				Филадельфия
			</div>
			<div className='text-xl font-sans align-middle text-orange-400'>
				классические роллы
			</div>
			<img
				className='min-h-96 max-h-96 scale-y-100'
				src={require('../assets/fila.png')}
				alt='image_alt'
			></img>
			<img
				className='absolute mt-10 top-96 h-96 -scale-y-75 blur-xl opacity-20'
				src={require('../assets/fila.png')}
				alt='image_alt'
			></img>
			<div className='flex flex-row justify-center items-center mx-auto rounded-2xl backdrop-brightness-75 backdrop-blur-xl text-xl text-gray-400 font-sans py-4'>
				<div className='px-7 flex flex-col justify-center items-center'>
					<GiSalmon className=' text-4xl' />
					<div>Лосось</div>
				</div>
				<BsThreeDotsVertical className='my-auto' />
				<div className='px-7 flex flex-col justify-center items-center'>
					<BiSolidBowlRice className='text-4xl' />
					Рис
				</div>
				<BsThreeDotsVertical className='my-auto' />
				<div className='px-7 flex flex-col justify-center items-center'>
					<PiShrimpFill className=' text-4xl' />
					Креветка
				</div>
			</div>
		</div>
	)
}

export default Card
