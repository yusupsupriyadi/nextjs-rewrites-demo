'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const handleGetData = async () => {
		try {
			setIsLoading(true);
			const res = await fetch('my-api/products');
			const data = await res.json();
			setData(data);
		} catch (error) {
			console.error('Error fetching data:', error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className='min-h-screen flex flex-col justify-between p-4 lg:p-8 font-[family-name:var(--font-geist-sans)]'>
			<main className='flex-1 flex flex-col items-center justify-center w-full max-w-[90%] lg:max-w-3xl mx-auto'>
				<div className='text-center mb-8 lg:mb-12'>
					<Link
						href='https://github.com/yusupsupriyadi/nextjs-rewrites-demo'
						target='_blank'
						rel='noreferrer'
						className='group inline-flex items-center gap-1.5 lg:gap-2 px-3 lg:px-4 py-1.5 lg:py-2 rounded-full bg-gradient-to-br from-neutral-800/30 via-neutral-800/50 to-white/30 hover:bg-gradient-to-br hover:from-neutral-800/50 hover:via-neutral-800/70 hover:to-white/30 transition-colors border border-neutral-700 text-xs lg:text-sm font-medium text-neutral-200'>
						<svg
							className='w-4 h-4 lg:w-5 lg:h-5'
							fill='currentColor'
							viewBox='0 0 24 24'
							aria-hidden='true'>
							<path
								fillRule='evenodd'
								d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
								clipRule='evenodd'
							/>
						</svg>
						<span>Repository</span>
					</Link>

					<h1 className='text-2xl lg:text-4xl font-bold mt-4'>
						Next.js Rewrites Demo
					</h1>
					<p className='text-base lg:text-lg text-gray-600 dark:text-gray-300 mt-2 max-w-md lg:max-w-2xl mx-auto'>
						Demonstration of Next.js rewrites feature to modify API
						endpoint URLs
					</p>
					<p className='text-xs lg:text-sm text-gray-500 dark:text-gray-400 mt-4 max-w-md lg:max-w-lg mx-auto'>
						💡 Open DevTools (F12) and check Network tab to see the
						URL rewrite in action!
					</p>
				</div>

				<div className='w-full space-y-6 lg:space-y-8'>
					<button
						onClick={handleGetData}
						disabled={isLoading}
						className='px-4 lg:px-6 py-2 lg:py-3 bg-blue-600 text-white text-sm lg:text-base rounded-lg hover:bg-blue-700 transition-colors mx-auto block disabled:opacity-50 disabled:cursor-not-allowed'>
						{isLoading ? (
							<span className='flex items-center gap-2'>
								<svg
									className='animate-spin h-4 w-4 lg:h-5 lg:w-5'
									viewBox='0 0 24 24'>
									<circle
										className='opacity-25'
										cx='12'
										cy='12'
										r='10'
										stroke='currentColor'
										strokeWidth='4'
										fill='none'
									/>
									<path
										className='opacity-75'
										fill='currentColor'
										d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
									/>
								</svg>
								Loading...
							</span>
						) : (
							'Fetch Data'
						)}
					</button>

					{isLoading && !data && (
						<div className='text-center p-4 lg:p-8'>
							<div className='inline-block animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg p-4 w-full max-w-[90%] lg:max-w-md'>
								<div className='h-3 lg:h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mx-auto mb-3 lg:mb-4'></div>
								<div className='h-3 lg:h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2 mx-auto'></div>
							</div>
						</div>
					)}

					{data && (
						<div className='space-y-4'>
							<div className='p-3 lg:p-4 bg-gray-50 dark:bg-gray-800 rounded-lg'>
								<h2 className='font-semibold mb-2 text-base lg:text-lg'>
									Endpoint URLs:
								</h2>
								<div className='space-y-2 lg:space-y-3'>
									<p className='text-xs lg:text-sm p-2 bg-white dark:bg-gray-700 rounded'>
										🌐 Client Side URL:{' '}
										<code className='text-blue-600 dark:text-blue-400 break-all'>
											https://nextjs-rewrites-demo.vercel.app/my-api/products
										</code>
										<span className='block text-xs text-gray-500 dark:text-gray-400 mt-1'>
											👆 This is the URL you&apos;ll see
											in Network tab
										</span>
									</p>
									<p className='text-xs lg:text-sm p-2 bg-white dark:bg-gray-700 rounded'>
										🔄 Hidden Server API:{' '}
										<code className='text-green-600 dark:text-green-400 break-all'>
											https://dummyjson.com/products/1
										</code>
										<span className='block text-xs text-gray-500 dark:text-gray-400 mt-1'>
											✨ Next.js internally redirects to
											this URL
										</span>
									</p>
								</div>
							</div>

							<div className='p-3 lg:p-4 bg-gray-50 dark:bg-gray-800 rounded-lg'>
								<h2 className='font-semibold mb-2 text-base lg:text-lg'>
									Response Data:
								</h2>
								<pre className='text-[10px] lg:text-sm bg-white dark:bg-gray-700/50 p-3 lg:p-4 rounded overflow-auto max-h-[300px] lg:max-h-[400px]'>
									{JSON.stringify(data, null, 2)}
								</pre>
							</div>
						</div>
					)}
				</div>
			</main>
		</div>
	);
}
