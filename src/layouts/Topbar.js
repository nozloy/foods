import React from 'react'
import { FaAngleLeft } from 'react-icons/fa6'
import { FaBasketShopping } from 'react-icons/fa6'

const Topbar = () => {
	return (
		<div className='w-full h-20 flex flex-row pt-2 text-4xl text-white items-center'>
			<FaAngleLeft className='basis-1/6' />
			<div className='basis-4/6 text-slate-100 font-bold font-sans drop-shadow-xl drop-'>
				MIDAFOOD
			</div>

			<FaBasketShopping className='basis-1/6' />
		</div>
	)
}

export default Topbar
