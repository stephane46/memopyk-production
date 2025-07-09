import { useLanguage } from "@/hooks/use-language";

export function HeroVideoCarousel() {
  const { language } = useLanguage();

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 bg-gradient-to-r from-memopyk-navy/80 to-transparent z-10"></div>
      <div className="w-full h-full bg-memopyk-navy flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">MEMOPYK</h1>
          <p className="text-xl md:text-2xl">
            {language === 'fr' 
              ? 'Vos souvenirs en films cinématographiques'
              : 'Your memories in cinematic films'
            }
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroVideoCarousel;