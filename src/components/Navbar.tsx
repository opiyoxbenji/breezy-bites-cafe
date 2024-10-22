'use client';

import React, { useState } from 'react';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleNavbar = (): void => {
		setIsMenuOpen(!isMenuOpen);
	};

	const navLinks = [
		{ href: '/', label: 'Our Menu' },
		{ href: '/', label: 'Shop' },
		{ href: '/', label: 'Blog' },
		{ href: '/', label: 'Contacts' },
		{ href: '/', label: 'About' },
	];

	return (
		<>
			<nav className='bg-black'>
				<div className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex items-center justify-between h-16'>
						<div className='fllex items-center'>
							<div className='flex-shrink-0'>
								<a href='/' className='text-white text-2xl'>
									Breezy Bites Cafe
								</a>
							</div>
						</div>
						<div className='hidden md:block'>
							<div className='ml-4 flex items-center space-x-4'>
								{navLinks.map(link => (
									<a
										key={link.label}
										href={link.href}
										className='text-white hover:bg-white hover:text-black rounded-lg p-2'>
										{link.label}
									</a>
								))}
							</div>
						</div>
						<div className='md:hidden flex items-center'>
							<button
								className='inline-flex items-center justify-center p-2 rounded-md text-white  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
								onClick={toggleNavbar}
								aria-label='Toggle Menu'>
								{isMenuOpen ? (
									<svg
										className='h-6 w-6'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M6 18L18 6M6 6l12 12'
										/>
									</svg>
								) : (
									<svg
										className='h-6 w-6'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M4 6h16M4 12h16m-7 6h7'
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>
				{isMenuOpen && (
					<div className='md:hidden flex justify-center items-center'>
						<div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
							{navLinks.map(link => (
								<a
									key={link.label}
									href={link.href}
									className='text-white block items-center hover:bg-white hover:text-black rounded-lg p-2'>
									{link.label}
								</a>
							))}
						</div>
					</div>
				)}
			</nav>
		</>
	);
};

export default Navbar;
