import React from 'react';
import Room from '/public/room.jpg';
import Image from 'next/image';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { DocumentTextIcon } from '@heroicons/react/24/outline';

interface RoomCardInterface {
	className?: string;
	complete?: boolean;
}

export default function RoomCard(props: RoomCardInterface) {
	return (
		<div className='bg-white  md:px-0 px-3'>
			<Image src={Room} alt='room' className='h-48 ' />
			<div className='p-4'>
				<div className='flex justify-between items-start'>
					<div className=' font-medium flex flex-col items-start gap-2'>
						<p className='font-bold'>Obras - Flores</p>
						<p className='text-purple-900'>
							Rua das Flores, 123, Vila Olimpia, Sao Paulo, SP
						</p>
						<p className='text-gray-500'>Responsavel Teresa Claire</p>
						<p
							className={`${
								props.complete
									? 'text-green-600   border-green-600'
									: 'text-orange-400   border-orange-400'
							} rounded-full px-2 font-bold border-2 text-sm`}>
							{props.complete ? 'Concluida' : 'Em andamento'}
						</p>
					</div>
					<ChevronRightIcon className='w-6 text-gray-400' />
				</div>
				<div className='mt-8 grid lg:grid-cols-3 lg:grid-rows-2 grid-cols-2 font-bold gap-2'>
					<div className='py-3 gap-2 flex items-center flex-col  border text-center  shadow-md row-span-2'>
						<div className='bg-purple-800/20 p-1 rounded-full'>
							<DocumentTextIcon className='w-6 text-purple-800   rounded-full' />
						</div>

						<p className='text-sm text-gray-400'>RELATORIOS TOTAIS</p>
						<p className='text-purple-800 text-2xl'>10</p>
					</div>
					<div className='py-3 gap-2 flex items-center flex-col  border text-center   '>
						<p className='text-sm text-gray-400'>LEMBRETES</p>
						<p className='text-purple-800 text-2xl'>5</p>
					</div>
					<div className='py-3 gap-2 flex items-center flex-col  border text-center   '>
						<p className='text-sm text-gray-400'>OCORRÊNCIAS</p>
						<p className='text-purple-800 text-2xl'>2</p>
					</div>
					<div className='py-3 gap-2 flex items-center flex-col  border text-center   '>
						<p className='text-sm text-gray-400'>FOTOS</p>
						<p className='text-purple-800 text-2xl'>2</p>
					</div>
					<div className='py-3 gap-2 flex items-center flex-col  border text-center   '>
						<p className='text-sm text-gray-400'>VÍDEOS</p>
						<p className='text-purple-800 text-2xl'>3</p>
					</div>
				</div>
			</div>
		</div>
	);
}
