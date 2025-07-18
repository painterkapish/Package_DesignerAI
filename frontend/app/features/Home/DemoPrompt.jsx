'use client';

import { useState } from "react";

const styles = {
  container: "flex flex-col items-center mb-8 w-full max-w-md",
  inputWrapper: "w-full max-w-md flex flex-col items-center max-auto",
  input: "w-full px-4 py-3 rounded-xl bg-[#232323] text-gray-100 placeholder-gray-400 outline-none shadow",
  example: "text-gray-400 text-sm mt-2 italic text-center",
  cta: "mt-4 px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-white font-semibold text-lg shadow-lg hover:scale-105 transition",
  seeExample: "text-indigo-400 hover:underline ml-2 text-sm"
};

/*const EXAMPLES = [
  "Eco-friendly tea box with floral design",
  "Luxury soap packaging for a new brand",
  "Minimalist label for organic honey jar"
];*/

export default function DemoPrompt({
  idea,
    setIdea,
    handleStart,
    showExample,
    handleSeeExample,
    examplePromt
}) {
  //const [exampleIdx] = useState(0);
  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <input
          value={idea}
          onChange={e => setIdea(e.target.value)}
          className={styles.input}
          placeholder="Describe your product or packaging idea..."
        />
        <div className={styles.example}>
          e.g., "{examplePromt}"
          <button className={styles.seeExample} onClick={handleSeeExample} type="button">
            See Example
          </button>
        </div>
        <button className={styles.cta} onClick={handleStart}>
          Start Designing
        </button>
        {showExample && (
          <div className="text-red-400 text-xs mt-2">
            Please describe your product or idea first, or <button className={styles.seeExample} onClick={handleSeeExample}>see an example</button>.
          </div>
        )}
    </div>
  </div>
  );
}