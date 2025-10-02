export default function TestPage() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Test Page</h1>
      <p className="text-gray-700 mb-4">Testing basic Tailwind CSS classes</p>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-red-500 text-white p-4 rounded">Red Box</div>
        <div className="bg-blue-500 text-white p-4 rounded">Blue Box</div>
        <div className="bg-green-500 text-white p-4 rounded">Green Box</div>
      </div>

      <div className="space-y-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Standard Tailwind Button
        </button>

        <div className="border-2 border-gray-300 p-4 rounded-lg shadow-lg">
          Shadow and Border Test
        </div>

        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white p-4 rounded">
          Gradient Test
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Custom Colors Test:</h2>
        <div className="bg-primary text-white p-4 rounded mb-2">Primary Color</div>
        <div className="bg-secondary text-white p-4 rounded mb-2">Secondary Color</div>
        <div className="bg-accent text-black p-4 rounded">Accent Color</div>
      </div>
    </div>
  );
}