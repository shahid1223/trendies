import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Fragment>
            {/* <!--
            This component uses @tailwindcss/forms

            yarn add @tailwindcss/forms
            npm install @tailwindcss/forms

            plugins: [require('@tailwindcss/forms')]
--> */}

            <footer class="bg-[#002E45]">
                <div class="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
                    <div class="lg:flex lg:flex-col lg:gap-8">
                        <div class="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
                            <div class="col-span-2">
                                <div>
                                    <Link to="/" className=" flex items-center mt-6">
                                        <span className="self-center text-3xl font-bold text-[#3498DB] whitespace-nowrap dark:text-white">Trendies</span>
                                    </Link>
                                </div>
                            </div>

                            <div class="col-span-2 lg:col-span-3 lg:flex lg:items-end">
                                <div>
                                    <p class="mt-6 text-gray-400">
                                        Get the freshest news from us
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
                            <div class="col-span-2">
                                <nav class="flex mt-6 text-sm text-gray-300 space-x-8 lg:space-x-12">
                                    <Link class="inline-block" to=""> Plans </Link>
                                    <Link class="inline-block" to=""> API </Link>
                                    <Link class="inline-block" to=""> Article </Link>
                                    <Link class="inline-block" to=""> Support </Link>
                                    <Link class="inline-block" to=""> Contact Us </Link>
                                </nav>

                            </div>

                            <div class="col-span-2 lg:col-span-3 lg:flex lg:items-end">
                                <div>
                                    <form class="flex space-x-4">
                                        <input class="w-full lg:w-96 rounded-full px-4 py-4 border h-12 text-gray-800 border-black bg-white" placeholder="Enter your email address" />
                                        <button class="px-4 lg:px-8 rounded-full bg-[#3A86FF] h-12 text-center text-white font-bold uppercase">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="pt-8 mt-12 border-t border-white/10">
                        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
                            <nav
                                class="flex justify-center text-xs text-gray-400 gap-4 lg:justify-start"
                            >
                                <Link to=""> Terms & Conditions </Link>
                                <Link to=""> Privacy Policy </Link>
                                <Link to=""> Accessibility </Link>
                                <Link to=""> Legal </Link>
                            </nav>
                            <p class="text-xs text-center text-[#92989F] lg:text-right">
                                Trendies © 2022. All right reserved
                            </p>


                        </div>
                    </div>
                </div>
            </footer>

        </Fragment>
    )
}

export default Footer
