"use client";
import { useState } from "react";
import HomeUI from "./HomeUI";

export default function HomeLogic() {
    const [idea, setIdea] = useState("");
    const [showExample, setShowExample] = useState(false);

    //Example Prompt
    const examplePrompt = "Eco-friendly tea box with floral design";

    //Handler for the main CTA
    const handleStart = () => {
        if (idea) {
            setShowExample(true);
            return;
        }
        //Here you would route to the next page, open modal, or trigger AI
        alert(`Generating packaging design for: ${idea}`);
    };

    //Handler for "See Example"
    const handleSeeExample = () => {
        setIdea(examplePrompt);
        setShowExample(false);
    };
    
    return (
        <HomeUI 
            idea={idea}
            setIdea={setIdea}
            handleStart={handleStart}
            showExample={showExample}
            handleSeeExample={handleSeeExample}
            examplePrompt={examplePrompt}
        />
    );
}