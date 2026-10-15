/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SoundProvider } from './audio/SoundContext.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { SelectedProjects } from './components/SelectedProjects.tsx';
import { SystemsExpertise } from './components/SystemsExpertise.tsx';
import { About } from './components/About.tsx';
import { HumanPursuits } from './components/HumanPursuits.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { ResumeModal } from './components/ResumeModal.tsx';
import { EasterEggBanner } from './components/EasterEggBanner.tsx';
import { NotFound } from './components/NotFound.tsx';
import { AmbientBackground } from './components/AmbientBackground.tsx';
import { ClickRipples } from './components/ClickRipples.tsx';
import { MarqueeDivider } from './components/MarqueeDivider.tsx';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [isNotFound, setIsNotFound] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname === '/404' || window.location.hash === '#404';
    }
    return false;
  });

  // Listen to hash changes (e.g. #404 or returning to #)
  useEffect(() => {
    const handleLocationChange = () => {
      setIsNotFound(window.location.pathname === '/404' || window.location.hash === '#404');
    };
    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const navigateToHome = () => {
    if (window.location.hash === '#404' || window.location.pathname === '/404') {
      window.history.pushState(null, '', '/');
    }
    setIsNotFound(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToWork = () => {
    navigateToHome();
    setTimeout(() => {
      const el = document.getElementById('work');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const toggle404 = () => {
    if (isNotFound) {
      navigateToHome();
    } else {
      window.history.pushState(null, '', '#404');
      setIsNotFound(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <SoundProvider>
      <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1C1E1D] selection:bg-[#476655]/20 selection:text-[#1C1E1D] relative">
        
        {/* Subtle, Peaceful Floating Light Motes */}
        <AmbientBackground />

        {/* Soothing Water Droplet Ripple on Clicks */}
        <ClickRipples />

        {/* Navigation */}
        <Navbar
          onOpenResume={() => setIsResumeOpen(true)}
          onNavigateHome={navigateToHome}
          isNotFoundPage={isNotFound}
        />

        {/* Main Content Landmark */}
        <main id="main-content" className="flex-1 relative z-10">
          {isNotFound ? (
            <NotFound
              onReturnHome={navigateToHome}
              onExploreWork={navigateToWork}
            />
          ) : (
            <>
              <Hero onOpenResume={() => setIsResumeOpen(true)} />
              <MarqueeDivider phrase="Distributed Architecture · Document Intelligence · Semantic Retrieval · Resilient Pipelines · Calm Software" />
              <SelectedProjects />
              <SystemsExpertise />
              <About />
              <HumanPursuits />
              <Contact onOpenResume={() => setIsResumeOpen(true)} />
            </>
          )}
        </main>

        {/* Footer */}
        <Footer
          onOpenResume={() => setIsResumeOpen(true)}
          onToggle404={toggle404}
          isNotFoundPage={isNotFound}
        />

        {/* Modals & Ambient Floating Elements */}
        <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
        <EasterEggBanner />
      </div>
    </SoundProvider>
  );
}
