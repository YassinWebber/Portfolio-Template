import ContactForm from "@/components/ContactForm";

export default function Contact() {
    return (
        <section className="bg-black w-full sm:p-24 px-4 py-16" id="contact">
            <div className="w-full flex flex-col items-center lg:flex-row justify-between gap-12">
                <div className="flex flex-col items-center lg:items-start gap-8">
                    <h1 className="text-white sm:text-6xl text-5xl max-w-[700px] font-bold text-center lg:text-start">Contact us, Let your dreams be real!</h1>
                    <p className="text-base text-white font-normal max-w-[700px] text-center lg:text-start">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo necessitatibus esse dignissimos fugit natus, eligendi autem impedit pariatur ut sit commodi rerum vero ad a!</p>
                </div>
                <div className="w-24 h-[.3rem] bg-white" />
                <div className=" flex justify-center lg:justify-end items-center">
                    <h1 className="text-white sm:text-4xl text-lg xs:text-lg font-bold">thewebber.dev@gmail.com</h1>
                </div>
            </div>

            <div className="mt-16">
                <ContactForm />
            </div>
        </section>
    )
}
