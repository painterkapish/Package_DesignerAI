import HeroSection from './HeroSection';
import DemoPrompt from './DemoPrompt';
import FeatureSection from './FeatureSection';
import Footer from './Footer';

export default function HomeUI() {
    return (
        <div className='min-h-screen flex flex-col bg-[#1a1a1a] text-gray-100'>
            <HeroSection />
            <DemoPrompt />
            <FeatureSection />
            <Footer />
        </div>
    );
}