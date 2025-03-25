'use client'
import React, { useState } from 'react';

const Formsection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = `Message from ${formData.name}`;
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
        window.location.href = `mailto:sasinneupane69@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
        // Reset form
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="bg-black text-white p-4" id='Form'>
            <div className="w-full max-w-3xl mx-auto">
                <h1 className="text-4xl font-mono mb-6 text-center">
                    <span className="text-cyan-400">Send me</span> <span className="text-white">a message!</span>
                </h1>

                <div className="text-center text-gray-300 mb-8">
                    <p>Got a question or any proposal?</p>
                    <p>Just want to say <span className="text-cyan-400">Hello world</span>? Type in...</p>
                </div>

                <form onSubmit={handleSubmit} className="mt-2">
                    <div className="mb-10">
                        <label className="block text-cyan-400 mb-2">Your Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter Your Name"
                            className="w-full bg-transparent border-b border-gray-600 py-2 text-cyan-400 focus:outline-none focus:border-cyan-400"
                            required
                        />
                    </div>

                    <div className="mb-10">
                        <label className="block text-cyan-400 mb-2">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email address"
                            className="w-full bg-transparent border-b border-gray-600 py-2 text-cyan-400 focus:outline-none focus:border-cyan-400"
                            required
                        />
                    </div>

                    <div className="mb-12">
                        <label className="block text-cyan-400 mb-2">Your Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Hey, I we need a designer for our X company. When can we book a meeting to discuss about this?"
                            className="w-full bg-transparent border-b border-gray-600 py-2 text-cyan-400 focus:outline-none focus:border-cyan-400 min-h-24"
                            required
                        />
                    </div>

                    <div className="flex justify-center mb-4">
                        <button
                            type="submit"
                            className="bg-cyan-800 text-white font-mono py-3 px-10 rounded hover:bg-cyan-700 transition-colors duration-300"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Formsection;