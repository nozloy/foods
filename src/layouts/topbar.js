import React from 'react'
import { FaAngleLeft } from 'react-icons/fa6'
import { IoMdHome } from 'react-icons/io'

const Topbar = () => {
	return (
		<div className='w-full h-20 flex flex-row pt-10 text-4xl text-white items-center'>
			<FaAngleLeft className='basis-1/6' />
			<div className='basis-4/6'></div>
			<IoMdHome className='basis-1/6' />
		</div>
	)
}

export default Topbar
