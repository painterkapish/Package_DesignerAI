export default function HeroSection() {
    return (
      <div className="flex flex-col items-center mt-16 mb-8">
        <img src="/logo.png" alt="Logo" className="w-16 h-16 mb-4"/>
        <h1 className="text-3xl font-bold mb-2">Package Designer AI</h1>
        <p className="text-lg text-gray-400 mb-4">AI-powered packaging design made easy.</p>
        <button className="px-6 py-2 bg-indigo-600 rounded-full text-white font-semibold hover:bg-indigo-500 transition">
          Start Designing
        </button>
      </div>
    );
  }


