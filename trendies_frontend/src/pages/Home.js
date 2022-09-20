import React, { Fragment } from 'react';
import thinginImg from '../Images/new/Investment.png';
import mobilehand from '../Images/new/mobilehand.png';
import Tweetstorm from '../Images/new/Tweetstorm.png';
import Success from '../Images/new/Success.png';
import Trends from '../Images/new/Trends.png';
import Stock from '../Images/new/Stock.png';
import factory from '../Images/new/factory.png';
import api from '../Images/new/api.png';
import notificationbell from '../Images/new/notification-bell.png';
import onlinelearning from '../Images/new/online-learning.png';

const Home = () => {

    const servicesInfo = [
        {
            image: factory,
            color: "bg-blue-300",
            name: "Each Industry",
            info: "We operate neural networks trained only with real industry-specific information. That makes our AI smarter."
        },
        {
            image: onlinelearning,
            color: "bg-green-300",
            name: "Always Learning",
            info: "We continuously train our AI with new social media posts to be as accurate as possible in predicting sentiment."
        },
        {
            image: notificationbell,
            color: "bg-pink-300",
            name: "Get Notified",
            info: "Receive an email of any stocks you watch which saw significant changes in sentiment the prior day. Get our updates on Twitter."
        },
        {
            image: api,
            color: "bg-purple-300",
            name: "API",
            info: "Sign up for a subscription plan and get access to our APIs. Our Basic plan is free with no credit card required."
        }
    ];

    return (
        <Fragment>
            {/* Banner one */}
            <section class="text-[#002E45] body-font">
                <div class="container mx-auto flex px-4 py-24 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-2/3 md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover object-center rounded" alt="hero" src={thinginImg} />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Public opinion of your stocks
                            <br class="hidden lg:inline-block" />can change any moment
                        </h1>
                        <p class="mb-8 leading-relaxed text-gray-500">Our AI analyzes social media to see if people are posting positive or negative things about the companies you invest in.</p>
                        <button className="relative inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-xl group bg-blue-900 from-white to-blue-900 group-hover:from-white group-hover:to-blue-900 hover:text-white dark:text-white">
                            <span className="relative px-4 md:px-8 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-xl group-hover:bg-opacity-0">
                                Get started now
                            </span>
                        </button>
                    </div>
                </div>
            </section>
            {/* Banner two */}
            <section class="text-white bg-[#3498DB] body-font">
                <div class="container mx-auto flex px-2 md:flex-row flex-col items-center justify-between py-2 px-2">
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Monitoring stocks on social networks.
                            <br class="hidden lg:inline-block" />
                            like Twitter and Reddit is time consuming.
                        </h1>
                        <p class="mb- leading-relaxed text-white">Built with the latest machine learning technology, Trendies watches multiple social media websites for you.</p>
                    </div>
                    <div class="lg:max-w-lg lg:w-2/3 md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover object-center rounded md:-mt-32" alt="hero" src={mobilehand} />
                    </div>
                </div>
            </section>
            {/* Banner three */}
            <section class="text-[#002E45] body-font">
                <div class="container mx-auto flex px-4 py-24 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-2/3 md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover object-center rounded" alt="hero" src={Tweetstorm} />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-2xl text-2xl mb-4 font-medium text-gray-900">We graph the sentiment and popularity of posts related to
                            <br class="hidden lg:inline-block" />he stocks you trade.
                        </h1>
                        <h1 class="title-font sm:text-2xl text-2xl mb-4 font-medium text-gray-900">Pro and Premium subscribers can also track volatility
                            <br class="hidden lg:inline-block" />and compare positive to negative social media sentiment.
                        </h1>
                        <button className="relative inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-xl group bg-[] from-white to-blue-900 group-hover:from-white group-hover:to-blue-900 hover:text-white dark:text-white">
                            <span className="relative px-4 md:px-8 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-xl group-hover:bg-opacity-0">
                                Subscribe
                            </span>
                        </button>
                    </div>
                </div>
            </section>
            {/* Banner four */}
            <section class="text-white bg-[#3498DB] body-font">
                <div class="container mx-auto flex md:flex-row flex-col items-center justify-between py-2 px-2">
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-2xl text-2xl mb-4 font-medium text-white">Chart sentiment against stock price movement and
                            <br class="hidden lg:inline-block" />trade volume with a Pro or Premium subscription.
                        </h1>
                        <h1 class="title-font sm:text-2xl text-2xl mb-4 font-medium text-white">See if online sentiment precedes or follows stock trends.</h1>
                        <button className="relative inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-xl group bg-blue-900 from-white to-blue-900 group-hover:from-white group-hover:to-blue-900 hover:text-white dark:text-white">
                            <span className="relative px-4 md:px-8 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-xl group-hover:bg-opacity-0">
                                Subscribe
                            </span>
                        </button>
                    </div>
                    <div class="lg:max-w-lg lg:w-2/3 md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover object-center rounded md:-mt-32" alt="hero" src={Success} />
                    </div>
                </div>
            </section>
            {/* Banner Five */}
            <section class="text-[#002E45] body-font">
                <div class="container mx-auto flex px-4 py-24 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-2/3 md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover object-center rounded" alt="hero" src={Trends} />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Follow what's trending today on Twitter, Reddit
                            <br class="hidden lg:inline-block" />nd subreddits like WallStreetBets.
                        </h1>
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"></h1>
                        <button className="relative inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-xl group bg-blue-900 from-white to-blue-900 group-hover:from-white group-hover:to-blue-900 hover:text-white dark:text-white">
                            <span className="relative px-4 md:px-8 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-xl group-hover:bg-opacity-0">
                                Subscribe
                            </span>
                        </button>
                    </div>
                </div>
            </section>
            {/* Banner Six */}
            <section class="text-white bg-[#3498DB] body-font">
                <div class="container mx-auto flex md:flex-row flex-col items-center justify-between py-2 px-2">
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-2xl text-2xl mb-4 font-medium text-white">Chart sentiment against stock price movement and
                            <br class="hidden lg:inline-block" />trade volume with a Pro or Premium subscription.
                        </h1>
                        <h1 class="title-font sm:text-2xl text-2xl mb-4 font-medium text-white">See if online sentiment precedes or follows stock trends.</h1>
                        <button className="relative inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-xl group bg-blue-900 from-white to-blue-900 group-hover:from-white group-hover:to-blue-900 hover:text-white dark:text-white">
                            <span className="relative px-4 md:px-8 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-xl group-hover:bg-opacity-0">
                                Subscribe
                            </span>
                        </button>
                    </div>
                    <div class="lg:max-w-lg lg:w-2/3 md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover object-center rounded md:-mt-20" alt="hero" src={Stock} />
                    </div>
                </div>
            </section>
            {/* section seven */}
            <section>
                <div className="min-h-screen flex items-center justify-center">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 p-5">
                        {servicesInfo.map((data, index) => {
                            return (
                                <div class="w-auto bg-white rounded-lg  dark:bg-gray-800 flex flex-col justify-center items-center" key={index}>
                                    <div className={`${data.color} py-4 px-4 flex justify-center items-center rounded-lg w-32 h-32`}>

                                        <img class="object-cover object-center" src={data.image} alt="" />

                                    </div>
                                    <div class="p-5">
                                        <a href="#">
                                            <h5 class="mb-2 text-2xl font-bold tracking-tighter text-gray-900 dark:text-white text-center">{data.name}</h5>
                                        </a>
                                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center tracking-tighter py-2 lg:px-28">{data.info}</p>

                                    </div>
                                </div>

                            )
                        })}
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Home
