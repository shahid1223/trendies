import React, { Fragment, useState } from 'react';
import baseUrl from '../api/baseUrl';
import { ToastContainer, toast } from 'react-toastify';

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const { name, email, message } = formData;

    const submitData = async (name, email, message) => {
        if (name !== "" && email !== "" && message !== "") {
            const response = await baseUrl.post('/api/create/message', formData);
            if (response.data.code === 200) {
                setFormData({ ...formData, name: "", email: "", message: "" });
                toast.success('Message saved successfully', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else {
                toast.error('Somthing went wrong', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        } else {
            console.log("error")
        }
    }

    return (
        <Fragment>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {/* Same as */}
            <ToastContainer />
            <section class="text-gray-600 body-font relative">
                <div class="container px-5 mx-auto">

                    <div class="lg:w-1/2 md:w-2/3 mx-auto">
                        <div class="flex flex-col text-start w-full mb-12">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Let's talk</h1>
                            <p class="lg:w-2/3">Ir is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                        <div class="flex flex-col justify-center items-center flex-wrap -m-2">
                            <div class="p-2 w-full">
                                <div class="relative">
                                    <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                                    <input
                                        required
                                        type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-900 focus:bg-white focus:ring-1 focus:ring-blue-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        value={name}
                                        onChange={(e) => onChange(e)}
                                    />
                                </div>
                            </div>
                            <div class="p-2 w-full">
                                <div class="relative">
                                    <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                                    <input
                                        required
                                        type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-900 focus:bg-white focus:ring-1 focus:ring-blue-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        value={email}
                                        onChange={(e) => onChange(e)}
                                    />
                                </div>
                            </div>

                            <div class="p-2 w-full">
                                <div class="relative">
                                    <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                                    <textarea
                                        required
                                        id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-1 focus:ring-blue-900 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                        value={message}
                                        onChange={(e) => onChange(e)}
                                    ></textarea>
                                </div>
                            </div>


                            <button
                                className="w-full relative inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-blue-900 from-white to-blue-900 group-hover:from-white group-hover:to-blue-900 hover:text-white dark:text-white"
                                onClick={submitData}
                            >
                                <span className="relative px-4 md:px-7 w-full py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                                    Submit
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default ContactForm
