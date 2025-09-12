

export default function Accounts() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <section className="container mx-auto px-6 py-20 flex-1">
        <h1 className="text-4xl font-bold text-white mb-6">My Account</h1>
        <p className="text-gray-400 mb-8">
          Manage your profile, settings, and subscriptions.
        </p>
        <button className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition">
          Edit Profile
        </button>
      </section>
    </div>
  );
}
