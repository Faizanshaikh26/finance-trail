
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="font-sans bg-white min-h-screen flex flex-col items-center py-12 px-4">
            <div className="text-center mb-16 max-w-4xl mx-auto">
                <h1 className="text-6xl font-bold text-[#111827] leading-tight tracking-tight">
                    Get In Touch
                </h1>
                <p className="mt-6 text-[27px] font-semibold text-gray-600 leading-relaxed px-4 sm:px-0">
                    Take control of your financial future.
                    <br />Contact our experts today for a personalized plan to achieve your goals.
                </p>
            </div>

            <div className="w-full max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

                    <div className="lg:col-span-2 bg-[#F0F6FF] rounded-2xl p-8 space-y-10">
                        <div>
                            <div className="flex items-center space-x-4">
                                <div >
                                    <Phone size={20} className="text-[#3B82F6]" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                            </div>
                            <p className="text-gray-600 mt-3 ml-12 text-sm">Call us during business hours</p>
                            <p className="text-gray-800 mt-2 ml-12 font-medium">‪+91 9898 911230‬</p>
                            <p className="text-gray-800 ml-12 font-medium">‪+91 81234 98765‬</p>
                        </div>

                        <div>
                            <div className="flex items-center space-x-4">
                                <div >
                                    <Mail size={20} className="text-[#3B82F6]" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                            </div>
                            <p className="text-gray-600 mt-3 ml-12 text-sm">Send us a message anytime</p>
                            <p className="text-gray-800 mt-2 ml-12 font-medium">info@bharathkapital12.com</p>
                            <p className="text-gray-800 ml-12 font-medium">support@bharathkapital12.com</p>
                        </div>

                        <div>
                            <div className="flex items-center space-x-4">
                                <div >
                                    <MapPin size={20} className="text-[#3B82F6]" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                            </div>
                            <p className="text-gray-600 mt-3 ml-12 text-sm">Visit our office</p>
                            <p className="text-gray-800 mt-2 ml-12 font-medium">131, Mayur Colony, Kothrud,<br />Pune, Maharashtra 411038</p>
                        </div>

                        <div>
                            <div className="flex items-center space-x-4">
                                <div >
                                    <Clock size={20} className="text-[#3B82F6]" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Business Hours</h3>
                            </div>
                            <p className="text-gray-800 mt-3 ml-12 font-medium"><span className="text-gray-600">Monday - Friday :</span> 9.00 AM- 6.00PM</p>
                            <p className="text-gray-800 ml-12 font-medium"><span className="text-gray-600">Saturday : 9.00 AM- 6.00PM</span></p>
                            <p className="text-gray-600 ml-12 font-medium"><span className="text-gray-600">Sunday : Closed</span></p>
                        </div>
                    </div>

                    <div className="lg:col-span-3 bg-white rounded-2xl p-10 border border-gray-200 shadow-sm">
                        <h2 className="text-3xl font-bold text-gray-900">Send Us a Message</h2>
                        <p className="mt-6 text-[20px] font-semibold text-gray-500">Fill out the form below and we'll get back to you within 24 hours.</p>

                        <form action="#" method="POST" className="mt-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                                <div>
                                    <label htmlFor="full-name" className="block text-lg font-semibold text-gray-900">
                                        Full Name<span className="text-red-500">*</span>
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="full-name"
                                            id="full-name"
                                            placeholder="Enter your full name"
                                            className="block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-3 px-4"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-lg font-semibold text-gray-900">
                                        Email Address<span className="text-red-500">*</span>
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Enter your email"
                                            className="block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-3 px-4"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-lg font-semibold text-gray-900">
                                        Phone Number<span className="text-red-500">*</span>
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            placeholder="Enter your phone number"
                                            className="block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-3 px-4"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-lg font-semibold text-gray-900">
                                        Select a service<span className="text-red-500">*</span>
                                    </label>
                                    <div className="mt-1">
                                        <select
                                            id="service"
                                            name="service"
                                            className="block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-3 px-4"
                                        >
                                            <option>Select a service</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="md:col-span-2">
                                    <label htmlFor="message" className="block text-lg font-semibold text-gray-900">
                                        Message<span className="text-red-500">*</span>
                                    </label>
                                    <div className="mt-1">
                                        <textarea
                                            name="message"
                                            id="message"
                                            rows="5"
                                            placeholder="Tell us about your financial goals or questions..."
                                            className="block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-3 px-4"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 text-center">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center rounded-lg border border-transparent bg-[#4338CA] py-3 px-12 text-base font-medium text-white shadow-md hover:bg-[#3730A3] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;