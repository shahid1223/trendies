import React, { Fragment } from 'react';
import ContactForm from '../Components/ContactForm';
import Contact from '../Images/new/Contact.png';

import location from '../Images/new/location.png';
import telephone from '../Images/new/telephone.png';
import mail from '../Images/new/mail.png';


const ContactUs = () => {

    const servicesInfo = [
        {
            image: location,
            name: "Location",
            info: "Smalriemseweg 2, 4112 NA Beusichem Netherlands."
        },
        {
            image: mail,
            name: "Email",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing."
        },
        {
            image: telephone,
            name: "Phone",
            info: "+1 9876543210"
        }
    ];

    return (
        <Fragment>
            <section class="text-[#002E45] body-font">
                <div class="container mx-auto flex px-4 py-24 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-2/3 md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover object-center rounded" alt="hero" src={Contact} />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-2xl text-2xl mb-4 font-medium text-gray-900">Contact Us</h1>
                        <p class="mb-8 leading-relaxed text-gray-500 text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                    </div>
                </div>
                <ContactForm />
                <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                    {/* section one */}
                    <section>
                        <div className=" flex items-center justify-center">
                            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2">
                                {servicesInfo.map((data, index) => {
                                    return (
                                        <div class="w-auto bg-white rounded-lg  dark:bg-gray-800 flex flex-col justify-center items-center" key={index}>
                                            <div className={`bg-blue-400 py-4 px-4 flex justify-center items-center rounded-full w-20 h-20`}>
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
                </div>
            </section>
        </Fragment>
    )
}

export default ContactUs
