import { useLanguage } from "@/hooks/use-language";

export function AboutSection() {
  const { language } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-memopyk-navy mb-6">
            {language === 'fr' ? 'À propos de MEMOPYK' : 'About MEMOPYK'}
          </h2>
          <p className="text-xl text-memopyk-blue max-w-3xl mx-auto">
            {language === 'fr' 
              ? 'Nous transformons vos souvenirs précieux en films cinématographiques professionnels qui racontent votre histoire unique.'
              : 'We transform your precious memories into professional cinematic films that tell your unique story.'
            }
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-memopyk-cream rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl">🎬</span>
            </div>
            <h3 className="text-xl font-semibold text-memopyk-navy mb-4">
              {language === 'fr' ? 'Production Professionnelle' : 'Professional Production'}
            </h3>
            <p className="text-memopyk-blue">
              {language === 'fr'
                ? 'Équipe experte en montage vidéo et narration visuelle'
                : 'Expert team in video editing and visual storytelling'
              }
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-memopyk-cream rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl">💝</span>
            </div>
            <h3 className="text-xl font-semibold text-memopyk-navy mb-4">
              {language === 'fr' ? 'Souvenirs Préservés' : 'Memories Preserved'}
            </h3>
            <p className="text-memopyk-blue">
              {language === 'fr'
                ? 'Conservation numérique de vos moments les plus précieux'
                : 'Digital preservation of your most precious moments'
              }
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-memopyk-cream rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl">🎭</span>
            </div>
            <h3 className="text-xl font-semibold text-memopyk-navy mb-4">
              {language === 'fr' ? 'Qualité Cinématographique' : 'Cinematic Quality'}
            </h3>
            <p className="text-memopyk-blue">
              {language === 'fr'
                ? 'Résultat final digne des plus grands studios'
                : 'Final result worthy of the greatest studios'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;