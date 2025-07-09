import { useLanguage } from "@/hooks/use-language";

export function GallerySection() {
  const { language } = useLanguage();

  return (
    <section className="py-20 bg-memopyk-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-memopyk-navy mb-6">
            {language === 'fr' ? 'Notre galerie' : 'Our gallery'}
          </h2>
          <p className="text-xl text-memopyk-blue">
            {language === 'fr' 
              ? 'Découvrez quelques-unes de nos créations'
              : 'Discover some of our creations'
            }
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-memopyk-orange to-memopyk-navy flex items-center justify-center">
                <span className="text-white text-lg font-semibold">
                  {language === 'fr' ? 'Projet' : 'Project'} {item}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-memopyk-navy mb-2">
                  {language === 'fr' ? 'Film de famille' : 'Family film'} {item}
                </h3>
                <p className="text-memopyk-blue text-sm">
                  {language === 'fr' 
                    ? 'Une histoire touchante de souvenirs familiaux'
                    : 'A touching story of family memories'
                  }
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;