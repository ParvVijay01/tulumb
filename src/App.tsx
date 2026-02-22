/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VibeSection from "./components/VibeSection";
import GastronomySection from "./components/GastronomySection";
import MenuSection from "./components/MenuSection";
import ElixirsSection from "./components/ElixirsSection";
import GallerySection from "./components/GallerySection";
import SocialFeed from "./components/SocialFeed";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#121212] selection:bg-primary selection:text-[#121212]">
      <Navbar />
      <main>
        <Hero />
        <VibeSection />
        <GastronomySection />
        <MenuSection />
        <ElixirsSection />
        <GallerySection />
        <SocialFeed />
      </main>
      <Footer />
    </div>
  );
}
