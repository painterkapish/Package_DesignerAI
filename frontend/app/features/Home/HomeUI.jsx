import HeroSection from './HeroSection';
import DemoPrompt from './DemoPrompt';
import FeaturesSection from './FeatureSection';
import Footer from './Footer';

const styles = {
  container: "min-h-screen flex flex-col items-center bg-[#1a1a1a] text-gray-100"
 };

export default function HomeUI({
    idea,
    setIdea,
    handleStart,
    showExample,
    handleSeeExample,
    examplePrompt
}) {
    return (
        <div className={styles.container}>
      <HeroSection />
      <div className="flex flex-col items-center w-full">
        <p className="text-gray-400 text-center mb-2">
            <span className="font-semibold text-indigo-400">How it works:</span>1. Describe your product or idea &nbsp; 2. Click <b>Start Designing</b> &nbsp; 3. Get instant AI packaging concepts!
        </p>
        <DemoPrompt 
            idea={idea}
            setIdea={setIdea}
            handleStart={handleStart}
            showExample={showExample}
            handleSeeExample={handleSeeExample}
            examplePrompt={examplePrompt}
        />
      </div>
      <FeaturesSection />
      <div className="flex-grow" />
      <Footer />
    </div>
  );

}