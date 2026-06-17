export default function SignupPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-6">
        {/* Badge */}
        <div className="text-center">
          <span className="inline-block px-3 py-1 text-sm font-semibold bg-blue-100 text-blue-600 rounded-full">
            Coming Soon
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-900">
          Create Your Account
        </h1>
        <p className="text-center text-gray-600">
          User accounts and personalized features are coming soon.
        </p>

        {/* Form Card */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            disabled
            className="w-full px-4 py-2 border rounded-lg text-gray-700 bg-gray-100 cursor-not-allowed"
          />
          <input
            type="email"
            placeholder="Email"
            disabled
            className="w-full px-4 py-2 border rounded-lg text-gray-700 bg-gray-100 cursor-not-allowed"
          />
          <input
            type="password"
            placeholder="Password"
            disabled
            className="w-full px-4 py-2 border rounded-lg text-gray-700 bg-gray-100 cursor-not-allowed"
          />

          <button
            type="button"
            disabled
            className="w-full py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition disabled:opacity-50"
          >
            Sign Up
          </button>
        </form>

        {/* Message */}
        <p className="text-center text-sm text-gray-500">
          Registration will be available soon.
        </p>
      </div>
    </main>
  )
}
