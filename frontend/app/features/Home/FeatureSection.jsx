export default function FeaturesSection() {
    return (
      <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
        <div className="bg-[#232323] rounded-xl p-6 w-72">
          <h2 className="text-xl font-semibold mb-2">AI Concept Generation</h2>
          <p className="text-gray-400">Get instant packaging ideas tailored to your product.</p>
        </div>
        <div className="bg-[#232323] rounded-xl p-6 w-72">
          <h2 className="text-xl font-semibold mb-2">Collaboration</h2>
          <p className="text-gray-400">Share and refine designs with your team in real time.</p>
        </div>
        <div className="bg-[#232323] rounded-xl p-6 w-72">
          <h2 className="text-xl font-semibold mb-2">Export & Print</h2>
          <p className="text-gray-400">Download print-ready files for production.</p>
        </div>
      </div>
    );
  }