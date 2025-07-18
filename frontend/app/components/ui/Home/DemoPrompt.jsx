"use client";
import { useState } from "react";

const styles = {
  container: "flex flex-col items-center mb-10 w-full",
  inputRow: "w-full max-w-md flex flex-col items-center",
  input: "w-full max-w-md px-4 py-3 rounded-xl bg-[#232323] text-gray-100 placeholder-gray-400 outline-none shadow mx-auto",
  cta: "mt-4 px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-white font-semibold text-lg shadow-lg hover:scale-105 transition",
  example: "text-gray-400 text-sm mt-2 italic text-center"
};

const EXAMPLES = [
  "Eco-friendly tea box with floral design",
  "Luxury soap packaging for a new brand",
  "Minimalist label for organic honey jar"
];

export default function DemoPrompt() {
  const [idea, setIdea] = useState("");
  const [exampleIdx, setExampleIdx] = useState(0);

  const handleExample = () => setIdea(EXAMPLES[exampleIdx]);

  return (
    <div className={styles.container}>
      <div className={styles.inputRow}>
        <input
          value={idea}
          onChange={e => setIdea(e.target.value)}
          className={styles.input}
          placeholder="Describe your product or packaging idea..."
        />
        <div className={styles.example}>
          e.g., “{EXAMPLES[exampleIdx]}”
          <button className="text-indigo-400 hover:underline ml-2 text-sm" onClick={handleExample} type="button">
            Use Example
          </button>
        </div>
        <button className={styles.cta} onClick={() => alert("This will generate a design!")}>Generate Design</button>
      </div>
    </div>
  );
}