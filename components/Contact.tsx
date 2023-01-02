import React from 'react'
import { BeakerIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'

type Props = {}

export default function Contact({ }: Props) {
    return (
        <div className='snap-start h-screen relative flex flex-col justify-center items-center'>
            <p className='py-4 pt-6 absolute top-8'>I have got just what you need. <span className='underline decoration-yellow-300'>Lets Talk</span></p>

            <div className='flex flex-col gap-y-2 text-[12px] py-4 mt-12'>
                <div className='flex gap-x-4 items-start justify-start'>
                    <PhoneIcon className="h-6 w-6 text-blue-500" />
                    <p>+923434772398</p>
                </div>
                <div className='flex gap-x-4 items-center justify-center'>
                    <EnvelopeIcon className="h-6 w-6 text-blue-500" />
                    <p>muhammadahmadrcs@gmail.com</p>
                </div>
            </div>

            <form className='w-[78%] mx-auto'>
                <div className="grid w-[78%] mx-auto gap-4 mb-4 md:grid-cols-2">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-white dark:text-white">First name</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-white dark:text-white">Last name</label>
                        <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                    </div>
                    <div className='w-full'>
                        <label className="block mb-2 text-sm font-medium text-white dark:text-white">Phone number</label>
                        <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                    </div>
                    <br />
                    <div className='w-[100%] mx-auto'>
                        <label className="block w-[100%] mb-2 text-sm font-medium text-white dark:text-white">Company</label>
                        <textarea id="company" className="bg-gray-50 w-[100%]  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required />
                    </div>
                </div>
                <button type="submit" className="text-black mx-auto md:w-[38%] md:ml-[11%]  bg-yellow-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </div>
    )
}