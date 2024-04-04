import Image from 'next/image';
import {
	ArrowDownIcon,
	ArrowRightStartOnRectangleIcon,
	Bars3Icon,
	BriefcaseIcon,
	BuildingOfficeIcon,
	CheckBadgeIcon,
	ChevronDownIcon,
	ClipboardDocumentListIcon,
	CurrencyDollarIcon,
	DocumentTextIcon,
	MagnifyingGlassIcon,
	PencilIcon,
	PencilSquareIcon,
	PlusIcon,
	ShoppingBagIcon,
	ShoppingCartIcon,
	TruckIcon,
	UserCircleIcon,
	UserIcon,
} from '@heroicons/react/24/solid';
import RoomCard from '@/components/card/RoomCard';

export default function Home() {
	return (
		<main className='flex gap-12 bg-gray-100 mx-auto max-w-[1640px] items-start '>
			<nav className='lg:block hidden fixed w-[280px] shadow-xl bg-white  pt-8 px-6 pb-16'>
				<h1 className='font-bold text-3xl text-purple-800 text-center mb-8'>
					Gestão de Obras
				</h1>
				<div className='flex flex-col gap-12'>
					<div className='font-semibold'>
						<h3 className='font-semibold text-gray-400 mb-3'>Gestao</h3>
						<ul className='flex flex-col gap-2'>
							<li className='flex items-center gap-1 text-purple-800 cursor-pointer'>
								<BuildingOfficeIcon className='w-5 ' />
								<p>Obras</p>
							</li>
							<li className='flex items-center gap-3 text-gray-400 cursor-pointer'>
								<DocumentTextIcon className='w-5 text-gray-400' />
								<p>Relatorios</p>
							</li>
							<li className='flex items-center gap-3 text-gray-400 cursor-pointer'>
								<CurrencyDollarIcon className='w-5 text-gray-400' />
								<p>Financeiro</p>
							</li>
							<li className='flex items-center gap-3 text-gray-400 cursor-pointer'>
								<ShoppingCartIcon className='w-5 text-gray-400' />
								<p>Cotacao de materiais</p>
							</li>
							<li className='flex items-center gap-3 text-gray-400 cursor-pointer'>
								<BuildingOfficeIcon className='w-5 text-gray-400' />
								<p>Conteudos</p>
							</li>
						</ul>
					</div>
					<div className='font-semibold'>
						<h3 className='font-semibold text-gray-400 mb-3'>CADASTRO</h3>
						<ul className='flex flex-col gap-2'>
							<li className='flex items-center gap-3 text-gray-400 cursor-pointer'>
								<UserIcon className='w-5 ' />
								<p>Mão de obra</p>
							</li>
							<li className='flex items-center gap-3 text-gray-400 cursor-pointer'>
								<DocumentTextIcon className='w-5 text-gray-400' />
								<p>Equipamentos</p>
							</li>
							<li className='flex items-center gap-3 text-gray-400 cursor-pointer'>
								<TruckIcon className='w-5 text-gray-400' />
								<p>Fornecedores</p>
							</li>
							<li className='flex items-center gap-3 text-gray-400 cursor-pointer'>
								<ClipboardDocumentListIcon className='w-5 text-gray-400' />
								<p>Atas de reunião</p>
							</li>
							<li className='flex items-center gap-3 text-gray-400 cursor-pointer'>
								<PencilSquareIcon className='w-5 text-gray-400' />
								<p>Contratos</p>
							</li>
						</ul>
					</div>
					<div className='font-semibold'>
						<h3 className='font-semibold text-gray-400 mb-3'>
							PERSONALIZAÇÕES
						</h3>
						<ul className='flex flex-col gap-2'>
							<li className='flex items-center gap-3 text-gray-400 cursor-pointer'>
								<CheckBadgeIcon className='w-5 ' />
								<p>Checklist de obras</p>
							</li>
							<li className='flex items-center gap-3 text-gray-400 cursor-pointer'>
								<PencilIcon className='w-5 text-gray-400' />
								<p>Layout relatorio cliente</p>
							</li>
						</ul>
					</div>
					<div className='font-semibold'>
						<h3 className='font-semibold text-gray-400 mb-3'>CONFIGURAÇÕES</h3>
						<ul className='flex flex-col gap-2'>
							<li className='flex items-center gap-3 text-gray-400 cursor-pointer'>
								<UserCircleIcon className='w-5 ' />
								<p>Meu perfil</p>
							</li>
							<li className='flex items-center gap-3 text-gray-400 cursor-pointer'>
								<BriefcaseIcon className='w-5 text-gray-400' />
								<p>Minha empresa</p>
							</li>
						</ul>
					</div>
					<div className='flex items-center gap-1 text-red-500 font-bold'>
						<ArrowRightStartOnRectangleIcon className='w-6' />
						<p>Sair</p>
					</div>
				</div>
			</nav>

			<div className='lg:mr-12 mt-4 lg:pl-4 flex-1 lg:ml-[300px]'>
				<header className='flex items-center lg:justify-between mb-8 lg:mr-0 mx-4 '>
					<button className='lg:hidden block mr-6'>
						<Bars3Icon className='w-6' />
					</button>
					<h2 className='font-bold text-3xl'>Obras</h2>
					<h2 className='lg:ml-0 ml-auto'>
						Olá, <span className='font-bold'>Henrique!</span>
					</h2>
				</header>

				<div className='flex gap-4 items-end justify-between mb-12 lg:mx-0 mx-4'>
					<div className='flex gap-2'>
						<div className='relative p-1 border-gray-400 border rounded-lg appearance-none'>
							<input
								placeholder='Buscar obra...'
								className='bg-inherit p-1 pl-8 pr-12 w-full text-sm font-medium appearance-none  '
							/>
							<MagnifyingGlassIcon className='w-5 text-purple-800 font-bold absolute left-2 top-1/2 -translate-y-1/2' />
						</div>

						<button className='font-bold text-purple-800 text-sm'>
							Buscar
						</button>
					</div>
					<div className='lg:block hidden'>
						<p className='font-bold text-sm mb-2'>Ordenaçao</p>
						<div className='relative'>
							<select
								className='-red-500 appearance-none block p-2 pl-4 pr-12 bg-inherit mt-1 border border-gray-400 rounded-lg  '
								name='select'
								id='select'>
								<option disabled selected hidden value='opcao1'>
									A - Z
								</option>
								<option value='opcao2'>B</option>
								<option value='opcao3'>C</option>
							</select>
							<ChevronDownIcon className='w-4 absolute right-4 top-1/2 -translate-y-1/2' />
						</div>
					</div>

					<div className='lg:block hidden'>
						<p className='font-bold text-sm mb-2'>Status da obra</p>
						<div className='relative'>
							<select
								className='-red-500 appearance-none block p-2 pl-4 pr-12 bg-inherit mt-1 border border-gray-400 rounded-lg  '
								name='select'
								id='select'>
								<option disabled selected hidden value='opcao1'>
									Todos
								</option>
								<option value='opcao2'>B</option>
								<option value='opcao3'>C</option>
							</select>
							<ChevronDownIcon className='w-4 absolute right-4 top-1/2 -translate-y-1/2' />
						</div>
					</div>

					<button className='hidden lg:block border border-purple-700 px-6 py-2 rounded-full text-purple-700 font-semibold text-sm '>
						<div className='flex items-center '>
							<PlusIcon className='w-6' />
							Adicionar obra
						</div>
					</button>
				</div>

				<div className=' gap-6 grid lg:grid-cols-2 grid-cols-1 place-items-center '>
					<RoomCard complete />
					<RoomCard />
					<RoomCard />
					<RoomCard />
					<RoomCard complete />
				</div>
			</div>
		</main>
	);
}
