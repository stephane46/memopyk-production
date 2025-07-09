import { useLanguage } from "@/hooks/use-language";

export function WhyMemopykSection() {
  const { language } = useLanguage();

  const features = [
    {
      titleFr: 'Qualité Professionnelle',
      titleEn: 'Professional Quality',
      descriptionFr: 'Nos films sont réalisés avec un équipement professionnel et une expertise technique de pointe.',
      descriptionEn: 'Our films are made with professional equipment and cutting-edge technical expertise.',
      icon: '🎬'
    },
    {
      titleFr: 'Souvenirs Préservés',
      titleEn: 'Preserved Memories',
      descriptionFr: 'Transformez vos photos et vidéos en un film durable qui traversera les générations.',
      descriptionEn: 'Transform your photos and videos into a lasting film that will span generations.',
      icon: '💝'
    },
    {
      titleFr: 'Narration Unique',
      titleEn: 'Unique Storytelling',
      descriptionFr: 'Chaque film raconte votre histoire unique avec une approche personnalisée et créative.',
      descriptionEn: 'Each film tells your unique story with a personalized and creative approach.',
      icon: '📖'
    },
    {
      titleFr: 'Livraison Rapide',
      titleEn: 'Fast Delivery',
      descriptionFr: 'Recevez votre film de mémoire en moins d\'une semaine après validation.',
      descriptionEn: 'Receive your memory film in less than a week after validation.',
      icon: '⚡'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-memopyk-navy mb-6">
            {language === 'fr' ? 'Pourquoi choisir MEMOPYK ?' : 'Why choose MEMOPYK?'}
          </h2>
          <p className="text-xl text-memopyk-blue max-w-3xl mx-auto">
            {language === 'fr' 
              ? 'Découvrez les avantages qui font de MEMOPYK le choix idéal pour vos films de mémoire.'
              : 'Discover the advantages that make MEMOPYK the ideal choice for your memory films.'
            }
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-memopyk-cream rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-memopyk-navy mb-4">
                {language === 'fr' ? feature.titleFr : feature.titleEn}
              </h3>
              <p className="text-memopyk-blue text-sm leading-relaxed">
                {language === 'fr' ? feature.descriptionFr : feature.descriptionEn}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="bg-memopyk-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            {language === 'fr' ? 'Commencer mon projet' : 'Start my project'}
          </a>
        </div>
      </div>
    </section>
  );
}

export default WhyMemopykSection;