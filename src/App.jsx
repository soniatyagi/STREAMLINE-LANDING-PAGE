import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import StickyBrandingBar from '@/components/sections/StickyBrandingBar';
import HeroSection from '@/components/sections/HeroSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import OttPlatformsSection from '@/components/sections/OttPlatformsSection';
import PlanHighlightsSection from '@/components/sections/PlanHighlightsSection';
import TrustBuilderSection from '@/components/sections/TrustBuilderSection';
import BonusUrgencySection from '@/components/sections/BonusUrgencySection';
import DeviceCompatibilitySection from '@/components/sections/DeviceCompatibilitySection';
import FaqSection from '@/components/sections/FaqSection';
import VisualsSection from '@/components/sections/VisualsSection';
import Footer from '@/components/sections/Footer';
import StickyWhatsAppButton from '@/components/sections/StickyWhatsAppButton';

function App() {
	return (
		<div className="min-h-screen dark-gradient-bg text-gray-100 font-sans">
			<StickyBrandingBar />
			<main>
				<HeroSection />
				<BenefitsSection />
				<OttPlatformsSection />
				<PlanHighlightsSection />
				<TrustBuilderSection />
				<BonusUrgencySection />
				<DeviceCompatibilitySection />
        <VisualsSection />
				<FaqSection />
			</main>
			<Footer />
			<StickyWhatsAppButton />
			<Toaster />
		</div>
	);
}

export default App;
