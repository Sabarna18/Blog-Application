

export default function Support() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-900">
            <section className="container mx-auto px-6 py-20 flex-1">
                <h1 className="text-4xl font-bold text-white mb-6">Support</h1>
                <p className="text-gray-400 mb-8">
                    Need help? Reach out to our support team 24/7 for assistance.
                </p>
                <a
                    href="/"
                    className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition"
                >
                    Contact Support
                </a>
            </section>
        </div>
    );
}
