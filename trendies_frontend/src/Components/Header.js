import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const navbarLinks = [
        {
            pathName: "Plans",
            paths: ""
        },
        {
            pathName: "API",
            paths: ""
        },
        {
            pathName: "Articles",
            paths: ""
        },
        {
            pathName: "Support",
            paths: ""
        },
        {
            pathName: "Contact Us",
            paths: "/contactus"
        }
    ];

    return (
        <Fragment>

            <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link to="/" className=" flex items-center">
                        <span className="self-center text-3xl font-bold text-[#3498DB] whitespace-nowrap dark:text-white">Trendies</span>
                    </Link>
                    <div className="flex md:order-2">
                        <button className="relative inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-blue-900 from-white to-blue-900 group-hover:from-white group-hover:to-blue-900 hover:text-white dark:text-white">
                            <span className="relative px-4 md:px-7 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                                Login
                            </span>
                        </button>
                        <button className="relative inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-blue-900 from-white to-blue-900 group-hover:from-white group-hover:to-blue-900 hover:text-white dark:text-white">
                            <span className="relative px-4 md:px-7 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                                Register
                            </span>
                        </button>
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {navbarLinks.map((data, index) => {
                                return (
                                    <li>
                                        <Link to={data.paths} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" key={index}>{data.pathName}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment >
    )
}

export default Header