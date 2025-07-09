import { useLanguage } from "@/hooks/use-language";

export function WhyMemopykSection() {
  const { language } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-memopyk-navy mb-6">
            {language === 'fr' ? 'Pourquoi MEMOPYK ?' : 'Why MEMOPYK?'}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-memopyk-cream rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-memopyk-navy mb-4">
              {language === 'fr' ? 'Rapide' : 'Fast'}
            </h3>
            <p className="text-memopyk-blue text-sm">
              {language === 'fr' ? 'Livraison en 7 jours' : 'Delivery in 7 days'}
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-memopyk-cream rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-lg font-semibold text-memopyk-navy mb-4">
              {language === 'fr' ? 'Précis' : 'Precise'}
            </h3>
            <p className="text-memopyk-blue text-sm">
              {language === 'fr' ? 'Montage professionnel' : 'Professional editing'}
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-memopyk-cream rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl">💎</span>
            </div>
            <h3 className="text-lg font-semibold text-memopyk-navy mb-4">
              {language === 'fr' ? 'Premium' : 'Premium'}
            </h3>
            <p className="text-memopyk-blue text-sm">
              {language === 'fr' ? 'Qualité 4K garantie' : '4K quality guaranteed'}
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-memopyk-cream rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-lg font-semibold text-memopyk-navy mb-4">
              {language === 'fr' ? 'Sécurisé' : 'Secure'}
            </h3>
            <p className="text-memopyk-blue text-sm">
              {language === 'fr' ? 'Données protégées' : 'Protected data'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyMemopykSection;