export default function Contact() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-900">
            <section className="container mx-auto px-6 py-20 flex-1">
                <h1 className="text-4xl font-bold text-white mb-6">Contact Us</h1>
                <form className="max-w-lg mx-auto space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 rounded-lg border border-gray-700 bg-gray-800 text-white"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 rounded-lg border border-gray-700 bg-gray-800 text-white"
                    />
                    <textarea
                        placeholder="Your Message"
                        className="w-full p-3 rounded-lg border border-gray-700 bg-gray-800 text-white h-32"
                    ></textarea>
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition">
                        Send Message
                    </button>
                </form>
            </section>
        </div>
    );
}
