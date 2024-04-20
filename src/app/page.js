import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import GallerySection from "./components/gallerySection.jsx"
import WhatsAppChatButton from "./components/watsapp.jsx"

export default function Home() {
  const predefinedMessage = "Hello! I'm interested in your profile.";
  return (
    <main className="flex min-h-screen flex-col bg-[#0a0919]">
      <Navbar />
      <div className="container relative mt-24 mx-auto px-12 py-4">
      <div className=" absolute top-10 flex flex-col items-center justify-center h-screen z-50">
            <WhatsAppChatButton phoneNumber={8802542091} message={predefinedMessage} />
        </div>
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <GallerySection/>
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
