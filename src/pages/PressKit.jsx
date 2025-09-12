

export default function PressKit() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <section className="container mx-auto px-6 py-20 flex-1">
        <h1 className="text-4xl font-bold text-white mb-6">Press Kit</h1>
        <p className="text-gray-400 mb-8">
          Download our official logos, brand assets, and media resources.
        </p>
        <div className="flex flex-wrap gap-6">
          <a
            href="#"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition"
          >
            Download Logos
          </a>
          <a
            href="#"
            className="px-6 py-3 bg-gray-700 text-gray-200 rounded-xl hover:bg-gray-600 transition"
          >
            Media Guide
          </a>
        </div>
      </section>
    </div>
  );
}
