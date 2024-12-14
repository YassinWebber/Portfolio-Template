"use client";

import Form from 'next/form'

export default function ContactForm() {
    const handleSubmit = (e) => {
        e.preventDefault()

        console.log('submited')
    }

    return (
        <Form
            className="w-full flex justify-start items-center"
            onSubmit={ handleSubmit }
        >
            <div className="flex flex-wrap w-full">
                <div className="w-full lg:w-1/2 py-4 pr-4">
                    <label htmlFor="fullname" className="text-white font-medium">Your Name</label>
                    <input type="text" id="fullname" placeholder="Full Name" className="w-full input" />
                </div>
                <div className="w-full lg:w-1/2 py-4">
                    <label htmlFor="phonenumber" className="text-white font-medium">Phone (optional)</label>
                    <input type="number" id="phonenumber" placeholder="Phone Number" className="w-full input" />
                </div>
                <div className="w-full lg:w-1/2 py-4 pr-4">
                    <label htmlFor="email" className="text-white font-medium">Email Address</label>
                    <input type="text" id="email" placeholder="Email Address" className="w-full input" />
                </div>
                <div className="w-full lg:w-1/2 py-4">
                    <label htmlFor="subject" className="text-white font-medium">Subject</label>
                    <input type="text" id="subject" placeholder="Type Subject" className="w-full input" />
                </div>
                <div className="w-full py-4">
                    <label htmlFor="message" className="text-white font-medium w-full">Message</label>
                    <textarea rows={ 8 } minLength={ 50 } maxLength={ 400 } id="message" placeholder="Type Message" className="w-full input resize-none " />
                </div>
                <button type="submit" className="bg-white text-black w-full rounded-full py-2 font-medium hover:bg-white/90 mt-2">Submit</button>
            </div>
        </Form>
    )
}

