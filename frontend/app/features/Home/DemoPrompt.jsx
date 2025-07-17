export default function DemoPrompt() {
    return (
      <div className="flex flex-col items-center mb-8">
        <input
          className="w-full max-w-md px-4 py-3 rounded-xl bg-[#232323] text-gray-100 placeholder-gray-400 outline-none"
          placeholder="Describe your product or packaging idea..."
          disabled
        />
        <div className="text-gray-400 text-sm mt-2">e.g., “Eco-friendly tea box with floral design”</div>
      </div>
    );
  }